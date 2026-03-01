const Purchase = require('../models/Purchase');
const Listing = require('../models/Listing');

// POST /api/purchase/:listingId - Consumer only
const buyEnergy = async (req, res) => {
    try {
        const { unitsBought } = req.body;
        const listing = await Listing.findById(req.params.listingId);

        if (!listing) {
            return res.status(404).json({ success: false, message: 'Listing not found.' });
        }

        if (!unitsBought || unitsBought <= 0) {
            return res.status(400).json({ success: false, message: 'Units to buy must be greater than 0.' });
        }

        if (unitsBought > listing.unitsAvailable) {
            return res.status(400).json({
                success: false,
                message: `Insufficient units. Only ${listing.unitsAvailable} kWh available.`
            });
        }

        const totalAmount = unitsBought * listing.pricePerUnit;

        // Create purchase record
        const purchase = await Purchase.create({
            consumer: req.user._id,
            producer: listing.producer,
            listing: listing._id,
            energyType: listing.energyType,
            unitsBought,
            pricePerUnit: listing.pricePerUnit,
            totalAmount
        });

        // Deduct units from listing
        listing.unitsAvailable -= unitsBought;
        if (listing.unitsAvailable <= 0) {
            await Listing.findByIdAndDelete(listing._id);
            console.log(`🗑 Listing ${listing._id} removed (fully sold out).`);
        } else {
            await listing.save();
        }

        console.log(`✅ Purchase: ${req.user.email} bought ${unitsBought} kWh for ₹${totalAmount}`);

        res.status(201).json({
            success: true,
            message: `Successfully purchased ${unitsBought} kWh for ₹${totalAmount.toLocaleString('en-IN')}.`,
            purchase
        });
    } catch (err) {
        console.error('Purchase Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error during purchase.' });
    }
};

// GET /api/purchase/my - Consumer's purchase history
const getMyPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find({ consumer: req.user._id })
            .populate('producer', 'name email')
            .populate('listing', 'energyType location')
            .sort({ createdAt: -1 });

        const totalUnits = purchases.reduce((sum, p) => sum + p.unitsBought, 0);
        const totalSpent = purchases.reduce((sum, p) => sum + p.totalAmount, 0);
        const co2Saved = (totalUnits * 0.82).toFixed(2);

        res.status(200).json({
            success: true,
            count: purchases.length,
            stats: {
                totalUnits,
                totalSpent,
                co2Saved: co2Saved >= 1000 ? `${(co2Saved / 1000).toFixed(2)} Tons` : `${co2Saved} kg`
            },
            purchases
        });
    } catch (err) {
        console.error('Get Purchases Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// GET /api/purchase/producer-sales - Producer's sales history
const getProducerSales = async (req, res) => {
    try {
        const sales = await Purchase.find({ producer: req.user._id })
            .populate('consumer', 'name email')
            .sort({ createdAt: -1 });

        const totalEarned = sales.reduce((sum, p) => sum + p.totalAmount, 0);
        const totalUnitsSold = sales.reduce((sum, p) => sum + p.unitsBought, 0);

        res.status(200).json({
            success: true,
            count: sales.length,
            stats: { totalEarned, totalUnitsSold },
            sales
        });
    } catch (err) {
        console.error('Get Sales Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

module.exports = { buyEnergy, getMyPurchases, getProducerSales };
