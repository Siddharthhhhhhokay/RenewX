import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../common/Button';

const Navbar = () => {
    return (
        <nav className="glass-premium border-b border-white/10 flex items-center justify-between px-12 py-6 sticky top-0 z-50 backdrop-blur-xl">
            <Link to="/" className="flex items-center space-x-3 group">
                <div className="h-10 w-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-3xl font-black text-slate-900 tracking-tighter">
                    Renew<span className="text-emerald-500">X</span>
                </span>
            </Link>

            <div className="hidden md:flex items-center space-x-12">
                <HeaderNavLink to="/">Home</HeaderNavLink>
                <HeaderNavLink to="/services">Services</HeaderNavLink>
                <HeaderNavLink to="/about">About</HeaderNavLink>
                <HeaderNavLink to="/contact">Contact</HeaderNavLink>
            </div>

            <div className="flex items-center space-x-6">
                <Link to="/login">
                    <Button variant="ghost" className="px-4">Log in</Button>
                </Link>
                <Link to="/signup">
                    <Button className="shadow-lg shadow-emerald-100">Get Started</Button>
                </Link>
            </div>
        </nav>
    );
};

const HeaderNavLink = ({ to, children }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `text-sm font-black uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-emerald-600 scale-110' : 'text-slate-500 hover:text-emerald-600'
            }`
        }
    >
        {children}
    </NavLink>
);

export default Navbar;
