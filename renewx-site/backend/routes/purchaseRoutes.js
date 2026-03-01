const express = require('express');
const router = express.Router();
const { buyEnergy, getMyPurchases, getProducerSales } = require('../controllers/purchaseController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// POST /api/purchase/:listingId  - Consumer only
router.post('/:listingId', protect, restrictTo('consumer'), buyEnergy);

// GET /api/purchase/my           - Consumer's purchase history
router.get('/my', protect, restrictTo('consumer'), getMyPurchases);

// GET /api/purchase/producer-sales - Producer's sales history
router.get('/producer-sales', protect, restrictTo('producer'), getProducerSales);

module.exports = router;
