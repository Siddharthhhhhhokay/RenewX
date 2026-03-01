const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const listingRoutes = require('./routes/listingRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const investmentRoutes = require('./routes/investmentRoutes');

const app = express();
const PORT = 5001;

// ─── MongoDB Atlas Connection ───────────────────────────────────────────────
const MONGO_URI = "mongodb+srv://sarlamakwana2017_db_user:KHUSHIPATEL@renewx-cluster.1si4sln.mongodb.net/renewx?appName=renewx-cluster";

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Atlas Connected — RenewX DB Ready'))
    .catch(err => {
        console.error('❌ MongoDB Connection Error:', err.message);
        process.exit(1);
    });

// ─── Middleware ─────────────────────────────────────────────────────────────
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// ─── Request Logger ──────────────────────────────────────────────────────────
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// ─── Routes ─────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/investments', investmentRoutes);

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '⚡ RenewX API is live!',
        endpoints: {
            auth: '/api/auth/signup | /api/auth/login | /api/auth/me',
            listings: 'GET /api/listings | POST /api/listings | PUT /api/listings/:id | DELETE /api/listings/:id',
            purchase: 'POST /api/purchase/:listingId | GET /api/purchase/my | GET /api/purchase/producer-sales',
            investments: 'POST /api/investments | GET /api/investments/my | DELETE /api/investments/:id'
        }
    });
});

// ─── 404 Handler ──────────────────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Route ${req.url} not found.` });
});

// ─── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`\n🚀 RenewX API Server running on http://localhost:${PORT}`);
    console.log('📡 Routes: /api/auth | /api/listings | /api/purchase | /api/investments\n');
});
