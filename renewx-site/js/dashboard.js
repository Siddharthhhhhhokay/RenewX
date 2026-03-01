/**
 * RenewX Dashboard Logic & Data Management
 * Handles API communication, stats calculation, and dynamic UI updates.
 */

const API_BASE = 'http://localhost:5001/api';

// --- Helper Functions ---
function getToken() {
    return localStorage.getItem('renewx_token');
}

function getCurrentUser() {
    const user = localStorage.getItem('renewx_currentUser');
    return user ? JSON.parse(user) : null;
}

function checkAuth(allowedRole) {
    const user = getCurrentUser();
    const token = getToken();

    if (!user || !token) {
        window.location.href = 'login.html';
        return false;
    }

    if (allowedRole && user.role !== allowedRole) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

function logout() {
    localStorage.removeItem('renewx_token');
    localStorage.removeItem('renewx_currentUser');
    window.location.href = 'login.html';
}

function formatCurrency(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
}

// --- API Wrapper Helpers ---
async function apiFetch(endpoint, options = {}) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(`API Error (${endpoint}):`, err);
        return { success: false, message: 'Connection error. Is the backend running?' };
    }
}

// --- Energy Listings API ---
async function getAllListings() {
    const res = await apiFetch('/listings');
    return res.success ? res.listings : [];
}

async function getProducerListings() {
    const res = await apiFetch('/listings/my');
    return res.success ? res.listings : [];
}

async function addListing(listingData) {
    return await apiFetch('/listings', {
        method: 'POST',
        body: JSON.stringify(listingData)
    });
}

async function updateListing(id, updatedData) {
    return await apiFetch(`/listings/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedData)
    });
}

async function deleteListing(id) {
    return await apiFetch(`/listings/${id}`, {
        method: 'DELETE'
    });
}

// --- Purchase API ---
async function buyEnergy(listingId, unitsBought) {
    return await apiFetch(`/purchase/${listingId}`, {
        method: 'POST',
        body: JSON.stringify({ unitsBought })
    });
}

async function getMyPurchases() {
    const res = await apiFetch('/purchase/my');
    return res.success ? res : { success: false, purchases: [], stats: { totalUnits: 0, totalSpent: 0, co2Saved: '0 kg' } };
}

async function getProducerSales() {
    const res = await apiFetch('/purchase/producer-sales');
    return res.success ? res : { success: false, sales: [], stats: { totalEarned: 0, totalUnitsSold: 0 } };
}

// --- Investments API ---
async function createInvestment(listingId, amount) {
    return await apiFetch('/investments', {
        method: 'POST',
        body: JSON.stringify({ listingId, amount })
    });
}

async function getMyInvestments() {
    const res = await apiFetch('/investments/my');
    return res.success ? res : { success: false, investments: [], stats: { totalInvested: 0, totalReturns: 0 } };
}

async function deleteInvestment(id) {
    return await apiFetch(`/investments/${id}`, { method: 'DELETE' });
}

// --- Impact Logic ---
function calculateCO2(units) {
    const kg = units * 0.82;
    if (kg >= 1000) return (kg / 1000).toFixed(2) + ' Tons';
    return kg.toFixed(2) + ' kg';
}

// Export for use in HTML files
window.RenewX = {
    getCurrentUser,
    getToken,
    formatCurrency,
    calculateCO2,
    checkAuth,
    logout,
    // Listings
    getListings: getAllListings, // Aliased for backward compatibility in marketplace
    getProducerListings,
    addListing,
    updateListing,
    deleteListing,
    // Purchases
    buyEnergy,
    getMyPurchases,
    getProducerSales,
    // Investments
    createInvestment,
    getMyInvestments,
    deleteInvestment
};
