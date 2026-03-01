import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import HowItWorks from '../pages/HowItWorks';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProducerDashboard from '../pages/ProducerDashboard';
import ConsumerDashboard from '../pages/ConsumerDashboard';
import InvestorDashboard from '../pages/InvestorDashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/producer" element={<ProducerDashboard />} />
            <Route path="/dashboard/consumer" element={<ConsumerDashboard />} />
            <Route path="/dashboard/investor" element={<InvestorDashboard />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
