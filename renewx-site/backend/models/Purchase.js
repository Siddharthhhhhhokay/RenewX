const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    consumer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    producer: {
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
    unitsBought: {
        type: Number,
        required: [true, 'Units bought is required'],
        min: [1, 'Must buy at least 1 unit']
    },
    pricePerUnit: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
