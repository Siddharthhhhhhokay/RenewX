const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    investor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    energyType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: [1000, 'Minimum investment is ₹1,000']
    },
    projectedReturn: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'COMPLETED', 'CANCELLED'],
        default: 'ACTIVE'
    }
}, { timestamps: true });

module.exports = mongoose.model('Investment', investmentSchema);
