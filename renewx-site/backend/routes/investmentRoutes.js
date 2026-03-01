const express = require('express');
const router = express.Router();
const { createInvestment, getMyInvestments, deleteInvestment } = require('../controllers/investmentController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// POST /api/investments         - Investor only: create investment
router.post('/', protect, restrictTo('investor'), createInvestment);

// GET /api/investments/my       - Investor only: get own investments
router.get('/my', protect, restrictTo('investor'), getMyInvestments);

// DELETE /api/investments/:id   - Investor only: remove investment
router.delete('/:id', protect, restrictTo('investor'), deleteInvestment);

module.exports = router;
