const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'renewx_super_secret_jwt_key_2026';

// Verify JWT and attach user to request
const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'No token provided. Access denied.' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found. Token invalid.' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error('Auth Middleware Error:', err.message);
        return res.status(401).json({ success: false, message: 'Token invalid or expired.' });
    }
};

// Restrict to specific roles
const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. This endpoint is for: ${roles.join(', ')} only.`
            });
        }
        next();
    };
};

module.exports = { protect, restrictTo, JWT_SECRET };
