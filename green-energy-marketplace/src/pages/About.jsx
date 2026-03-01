import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';

const About = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-24 pb-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="animate-entrance text-center mb-24">
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-8">
                            We Are <span className="text-emerald-500">RenewX</span>.
                        </h1>
                        <p className="text-2xl text-slate-500 font-black max-w-3xl mx-auto leading-relaxed">
                            Pioneering a world where energy is clean, transparent, and owned by the people.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-32">
                        <div className="animate-entrance" style={{ animationDelay: '0.1s' }}>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-600 font-semibold leading-relaxed mb-6">
                                Our mission is to democratize energy production. We believe that everyone should have the power to generate, sell, and buy green energy without middlemen taking a cut of the future.
                            </p>
                            <div className="p-8 glass-premium rounded-[32px] border-l-4 border-emerald-500">
                                <p className="italic text-slate-700 font-bold text-xl">
                                    "Efficiency is not just about using less energy; it's about using energy better."
                                </p>
                            </div>
                        </div>

                        <div className="animate-entrance" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Our Vision</h2>
                            <p className="text-lg text-slate-600 font-semibold leading-relaxed mb-8">
                                To build a global, decentralized grid powered entirely by sustainable sources, where every solar panel and wind turbine contributes to a collective, green economy.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <Card className="p-6">
                                    <h4 className="text-3xl font-black text-emerald-600 mb-1">100%</h4>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Renewable Focus</p>
                                </Card>
                                <Card className="p-6">
                                    <h4 className="text-3xl font-black text-blue-600 mb-1">P2P</h4>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Market Model</p>
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div className="animate-entrance" style={{ animationDelay: '0.3s' }}>
                        <Card className="w-full text-center py-20 bg-emerald-900 text-white border-none">
                            <h2 className="text-5xl font-black mb-6">Join the Revolution</h2>
                            <p className="text-emerald-200 font-bold text-xl mb-12 max-w-2xl mx-auto">
                                Be a part of the most significant energy shift in human history.
                            </p>
                            <button className="px-10 py-5 bg-white text-emerald-900 font-black rounded-2xl hover:scale-105 transition-transform duration-300">
                                Get Started Now
                            </button>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
