import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Services = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-24 pb-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="animate-entrance mb-24">
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-8">
                            Premium <span className="text-emerald-500">Solutions</span>.
                        </h1>
                        <p className="text-xl text-slate-500 font-bold max-w-2xl leading-relaxed">
                            From individual energy trading to enterprise-level investment platforms, RenewX provides the infrastructure for a sustainable tomorrow.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 mb-32">
                        <ServiceCard
                            title="P2P Energy Trading"
                            desc="Directly connect with local producers or consumers to trade energy at fair market prices without hidden fees."
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
                            color="emerald"
                            delay="0.1s"
                        />
                        <ServiceCard
                            title="Green Portfolios"
                            desc="Invest in vetted renewable projects around the globe. Track your ROI and ESG impact in real-time."
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                            color="blue"
                            delay="0.2s"
                        />
                        <ServiceCard
                            title="Smart Monitoring"
                            desc="AI-driven insights for producers to optimize energy yield and for consumers to reduce their carbon footprint."
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                            color="purple"
                            delay="0.3s"
                        />
                    </div>

                    <div className="animate-entrance" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Engineered for Transparency</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="flex items-start space-x-6">
                                <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-emerald-600">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 mb-2">Immutable Ledger</h4>
                                    <p className="text-slate-500 font-bold">Every energy trade is recorded permanently, ensuring total trust between parties.</p>
                                </div>
                            </Card>
                            <Card className="flex items-start space-x-6">
                                <div className="h-12 w-12 bg-blue-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-blue-600">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 mb-2">Real-time Settlements</h4>
                                    <p className="text-slate-500 font-bold">Payments are processed instantly as energy flows, providing liquidity to producers.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

const ServiceCard = ({ title, desc, icon, color, delay }) => {
    const colors = {
        emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
        blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
        purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
    }
    return (
        <Card className="group hover:scale-[1.02] transition-all duration-500 animate-entrance" style={{ animationDelay: delay }}>
            <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${colors[color]} group-hover:text-white`}>
                {icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-500 font-semibold leading-relaxed mb-8">{desc}</p>
            <Button variant="secondary" className="w-full">Explore Details</Button>
        </Card>
    )
}

export default Services;
