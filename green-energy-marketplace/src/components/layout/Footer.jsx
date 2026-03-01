import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="glass-premium border-t border-white/10 pt-20 pb-10 px-8 mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <div className="h-10 w-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <span className="text-2xl font-black text-slate-900 tracking-tighter">Renew<span className="text-emerald-500">X</span></span>
                        </Link>
                        <p className="text-slate-500 font-medium leading-relaxed mb-8">
                            Decentralizing the future of energy through peer-to-peer transparency and sustainable innovation.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            <SocialIcon d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black tracking-tight mb-6">Marketplace</h4>
                        <ul className="space-y-4">
                            <FooterLink to="/signup">Become a Producer</FooterLink>
                            <FooterLink to="/signup">Buy Energy</FooterLink>
                            <FooterLink to="/signup">Invest in Projects</FooterLink>
                            <FooterLink to="/dashboard/producer">Explorer</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black tracking-tight mb-6">Company</h4>
                        <ul className="space-y-4">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/services">Services</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="#">Documentation</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black tracking-tight mb-6">Newsletter</h4>
                        <p className="text-slate-500 font-medium text-sm mb-6">Stay updated with the latest in green tech.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-slate-100 border-none rounded-xl py-4 px-5 pr-12 focus:ring-2 focus:ring-emerald-500 font-bold text-slate-900"
                            />
                            <button className="absolute right-2 top-2 h-10 w-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-400 font-bold text-sm">
                    <p>&copy; 2026 RenewX Marketplace. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <li>
        <Link to={to} className="text-slate-500 hover:text-emerald-600 font-bold transition-colors">
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ d }) => (
    <Link to="#" className="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
    </Link>
);

export default Footer;
