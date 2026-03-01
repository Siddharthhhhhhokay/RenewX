const Investment = require('../models/Investment');
const Listing = require('../models/Listing');

// POST /api/investments - Investor only
const createInvestment = async (req, res) => {
    try {
        const { listingId, amount } = req.body;

        if (!listingId || !amount) {
            return res.status(400).json({ success: false, message: 'listingId and amount are required.' });
        }
        if (amount < 1000) {
            return res.status(400).json({ success: false, message: 'Minimum investment is ₹1,000.' });
        }

        const listing = await Listing.findById(listingId);
        if (!listing) {
            return res.status(404).json({ success: false, message: 'Listing not found.' });
        }

        const projectedReturn = amount * 1.12; // 12% ROI

        const investment = await Investment.create({
            investor: req.user._id,
            listing: listing._id,
            energyType: listing.energyType,
            location: listing.location,
            amount,
            projectedReturn
        });

        console.log(`✅ Investment: ${req.user.email} invested ₹${amount} in ${listing.energyType} at ${listing.location}`);

        res.status(201).json({ success: true, message: 'Investment recorded.', investment });
    } catch (err) {
        console.error('Create Investment Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// GET /api/investments/my - Investor's own investments
const getMyInvestments = async (req, res) => {
    try {
        const investments = await Investment.find({ investor: req.user._id })
            .populate('listing', 'energyType location unitsAvailable pricePerUnit')
            .sort({ createdAt: -1 });

        const totalInvested = investments.reduce((sum, i) => sum + i.amount, 0);
        const totalReturns = investments.reduce((sum, i) => sum + i.projectedReturn, 0);

        res.status(200).json({
            success: true,
            count: investments.length,
            stats: { totalInvested, totalReturns },
            investments
        });
    } catch (err) {
        console.error('Get Investments Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// DELETE /api/investments/:id - Investor only
const deleteInvestment = async (req, res) => {
    try {
        const investment = await Investment.findById(req.params.id);
        if (!investment) return res.status(404).json({ success: false, message: 'Investment not found.' });

        if (investment.investor.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: 'Not authorized.' });
        }

        await Investment.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Investment removed.' });
    } catch (err) {
        console.error('Delete Investment Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

module.exports = { createInvestment, getMyInvestments, deleteInvestment };
