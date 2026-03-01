const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    energyType: {
        type: String,
        enum: ['Solar', 'Wind', 'Biogas'],
        required: [true, 'Energy type is required']
    },
    unitsAvailable: {
        type: Number,
        required: [true, 'Units available is required'],
        min: [1, 'Units must be greater than 0']
    },
    pricePerUnit: {
        type: Number,
        required: [true, 'Price per unit is required (INR)'],
        min: [1, 'Price must be greater than 0']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
