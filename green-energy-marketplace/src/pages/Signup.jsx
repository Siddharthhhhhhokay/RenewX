import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Button from '../components/common/Button';

const Signup = () => {
    const [role, setRole] = useState('consumer');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, perform registration here
        navigate(`/dashboard/${role}`);
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_70%_70%,#f0fdf4_0%,transparent_50%)]"></div>
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-8 animate-fade-in">
                <div className="glass p-12 rounded-[32px] shadow-2xl w-full max-w-lg border border-white/50 relative">
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                    <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-tight text-center">Join Renew<span className="text-emerald-600 font-black">X</span></h2>
                    <p className="text-gray-500 mb-10 text-center font-medium">Start your green energy journey</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">I am a</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                            >
                                <option value="producer">Producer</option>
                                <option value="consumer">Consumer</option>
                                <option value="investor">Investor</option>
                            </select>
                        </div>
                        <Button type="submit" className="w-full py-4">Create Account</Button>
                    </form>

                    <div className="mt-8 text-center text-gray-600">
                        Already have an account? <Link to="/login" className="text-emerald-600 font-bold hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
