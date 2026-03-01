const Listing = require('../models/Listing');

// POST /api/listings - Producer only
const createListing = async (req, res) => {
    try {
        const { energyType, unitsAvailable, pricePerUnit, location } = req.body;

        if (!energyType || !unitsAvailable || !pricePerUnit || !location) {
            return res.status(400).json({ success: false, message: 'All fields required: energyType, unitsAvailable, pricePerUnit (INR), location' });
        }
        if (unitsAvailable <= 0) return res.status(400).json({ success: false, message: 'Units must be > 0' });
        if (pricePerUnit <= 0) return res.status(400).json({ success: false, message: 'Price must be > 0' });

        const listing = await Listing.create({
            producer: req.user._id,
            energyType,
            unitsAvailable,
            pricePerUnit,
            location
        });

        console.log(`✅ Listing created by ${req.user.email}: ${energyType} - ${unitsAvailable} kWh @ ₹${pricePerUnit}`);

        res.status(201).json({ success: true, message: 'Listing created.', listing });
    } catch (err) {
        console.error('Create Listing Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// GET /api/listings - Public
const getAllListings = async (req, res) => {
    try {
        const listings = await Listing.find({ unitsAvailable: { $gt: 0 } })
            .populate('producer', 'name email')
            .sort({ createdAt: -1 });

        res.status(200).json({ success: true, count: listings.length, listings });
    } catch (err) {
        console.error('Get Listings Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// GET /api/listings/my - Producer's own listings
const getMyListings = async (req, res) => {
    try {
        const listings = await Listing.find({ producer: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: listings.length, listings });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// PUT /api/listings/:id - Producer only
const updateListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ success: false, message: 'Listing not found.' });

        if (listing.producer.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: 'Not authorized to update this listing.' });
        }

        const { unitsAvailable, pricePerUnit, location } = req.body;
        if (unitsAvailable !== undefined && unitsAvailable <= 0) {
            return res.status(400).json({ success: false, message: 'Units must be > 0' });
        }

        const updated = await Listing.findByIdAndUpdate(
            req.params.id,
            { unitsAvailable, pricePerUnit, location },
            { new: true, runValidators: true }
        );

        console.log(`✅ Listing updated: ${req.params.id}`);
        res.status(200).json({ success: true, message: 'Listing updated.', listing: updated });
    } catch (err) {
        console.error('Update Listing Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// DELETE /api/listings/:id - Producer only
const deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ success: false, message: 'Listing not found.' });

        if (listing.producer.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: 'Not authorized to delete this listing.' });
        }

        await Listing.findByIdAndDelete(req.params.id);
        console.log(`🗑 Listing deleted: ${req.params.id}`);
        res.status(200).json({ success: true, message: 'Listing deleted.' });
    } catch (err) {
        console.error('Delete Listing Error:', err.message);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

module.exports = { createListing, getAllListings, getMyListings, updateListing, deleteListing };
