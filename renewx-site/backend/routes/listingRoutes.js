const express = require('express');
const router = express.Router();
const {
    createListing,
    getAllListings,
    getMyListings,
    updateListing,
    deleteListing
} = require('../controllers/listingController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// GET /api/listings          - Public: all listings
router.get('/', getAllListings);

// GET /api/listings/my       - Protected: producer's own listings
router.get('/my', protect, restrictTo('producer'), getMyListings);

// POST /api/listings         - Producer only
router.post('/', protect, restrictTo('producer'), createListing);

// PUT /api/listings/:id      - Producer only
router.put('/:id', protect, restrictTo('producer'), updateListing);

// DELETE /api/listings/:id   - Producer only
router.delete('/:id', protect, restrictTo('producer'), deleteListing);

module.exports = router;
