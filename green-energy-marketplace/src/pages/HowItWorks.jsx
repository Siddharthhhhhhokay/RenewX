import React from 'react';
import Navbar from '../components/layout/Navbar';

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-8 py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">How RenewX Works</h1>
                <div className="prose prose-emerald lg:prose-xl text-gray-600 space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Direct Trading</h2>
                        <p>
                            We eliminate intermediaries by allowing renewable energy producers to list their output
                            directly on our platform. Consumers can then purchase credits representing this energy.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Verified Green Energy</h2>
                        <p>
                            Every kWh listed on our platform is verified through smart meter data and digital certificates,
                            ensuring you get exactly what you pay for—100% renewable energy.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Investment Opportunities</h2>
                        <p>
                            Investors can browse upcoming green energy projects (like community solar or wind farms)
                            and provide the capital needed for construction in exchange for future returns.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
