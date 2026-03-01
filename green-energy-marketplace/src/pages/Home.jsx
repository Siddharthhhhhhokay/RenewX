import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Footer from '../components/layout/Footer';
import heroImage from '/assets/hero.png';

const Home = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Mesh Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/20 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-300/10 blur-[150px] rounded-full"></div>
            </div>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="pt-20 pb-32 px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-entrance">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-black text-emerald-800 uppercase tracking-widest">Market Live</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                                The Future of <span className="text-emerald-500">Pure</span> Green Energy.
                            </h1>
                            <p className="text-xl text-slate-600 font-semibold mb-12 max-w-xl leading-relaxed">
                                RenewX is the world's most advanced peer-to-peer energy marketplace. Buy, sell, and invest in sustainable power with total transparency.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                                <Link to="/signup">
                                    <Button className="w-full sm:w-auto h-16 text-lg">Start Trading</Button>
                                </Link>
                                <Link to="/how-it-works">
                                    <Button variant="secondary" className="w-full sm:w-auto h-16 text-lg">Learn More</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative animate-entrance" style={{ animationDelay: '0.2s' }}>
                            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/40 shadow-2xl glass-premium p-4">
                                <img
                                    src={heroImage}
                                    alt="Renewable Energy Abstract"
                                    className="w-full h-auto rounded-[32px] object-cover"
                                />
                            </div>
                            {/* Decorative blobs */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-200/30 blur-3xl rounded-full -z-10"></div>
                        </div>
                    </div>
                </section>

                {/* Roles Section */}
                <section className="py-24 px-8 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 animate-entrance">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Choose Your Path</h2>
                            <p className="text-lg text-slate-500 font-bold">Join the ecosystem that's changing the world.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-10">
                            <Card className="hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.1s' }}>
                                <div className="h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Producers</h3>
                                <p className="text-slate-600 mb-8 font-medium">Sell your excess clean energy directly to consumers at market rates.</p>
                                <Link to="/signup" className="group flex items-center text-emerald-600 font-black tracking-wide">
                                    Join as Producer <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </Link>
                            </Card>

                            <Card className="hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.2s' }}>
                                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Consumers</h3>
                                <p className="text-slate-600 mb-8 font-medium">Access affordable renewable energy and track your environmental impact.</p>
                                <Link to="/signup" className="group flex items-center text-emerald-600 font-black tracking-wide">
                                    Join as Consumer <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </Link>
                            </Card>

                            <Card className="hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.3s' }}>
                                <div className="h-16 w-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Investors</h3>
                                <p className="text-slate-600 mb-8 font-medium">Power green projects and earn returns on your sustainable portfolio.</p>
                                <Link to="/signup" className="group flex items-center text-emerald-600 font-black tracking-wide">
                                    Join as Investor <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </Link>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
