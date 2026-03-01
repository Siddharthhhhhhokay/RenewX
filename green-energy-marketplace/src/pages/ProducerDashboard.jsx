import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const ProducerDashboard = () => {
    return (
        <DashboardLayout role="producer">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div className="animate-entrance">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Producer <span className="text-emerald-500">Center</span></h2>
                    <p className="text-slate-500 font-bold mt-1 text-lg">Optimizing your renewable energy yield.</p>
                </div>
                <Button className="py-4 px-10 shadow-2xl animate-entrance" style={{ animationDelay: '0.1s' }}>
                    Add Listing +
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                <Card className="border-l-4 border-emerald-500" style={{ animationDelay: '0.1s' }}>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">Total Energy</p>
                        <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <h3 className="text-5xl font-black text-slate-900">4,250</h3>
                        <span className="text-xl font-black text-slate-400">kWh</span>
                    </div>
                    <p className="text-sm font-black text-emerald-600 mt-4 inline-flex items-center px-4 py-1.5 bg-emerald-50 rounded-full">
                        <span className="mr-1">&uarr;</span> 12% boost
                    </p>
                </Card>

                <Card className="border-l-4 border-blue-500" style={{ animationDelay: '0.2s' }}>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Revenue</p>
                        <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-black text-slate-400">$</span>
                        <h3 className="text-5xl font-black text-slate-900">1,840</h3>
                        <span className="text-xl font-black text-slate-400">.50</span>
                    </div>
                    <p className="text-sm font-black text-blue-600 mt-4 inline-flex items-center px-4 py-1.5 bg-blue-50 rounded-full">
                        All-time highs
                    </p>
                </Card>

                <Card className="border-l-4 border-purple-500" style={{ animationDelay: '0.3s' }}>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-black text-purple-600 uppercase tracking-widest">Listings</p>
                        <div className="h-10 w-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <h3 className="text-5xl font-black text-slate-900">12</h3>
                        <span className="text-xl font-black text-slate-400">Active</span>
                    </div>
                    <p className="text-sm font-black text-purple-600 mt-4 inline-flex items-center px-4 py-1.5 bg-purple-50 rounded-full">
                        4 Pending Review
                    </p>
                </Card>
            </div>

            <div className="animate-entrance" style={{ animationDelay: '0.4s' }}>
                <Card title="Market Performance" className="w-full">
                    <div className="h-64 flex items-center justify-center bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Visualizing Energy Trends...</span>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default ProducerDashboard;
