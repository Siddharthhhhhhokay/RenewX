import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const InvestorDashboard = () => {
    return (
        <DashboardLayout role="investor">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div className="animate-entrance">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Investor <span className="text-blue-500">Portfolio</span></h2>
                    <p className="text-slate-500 font-bold mt-1 text-lg">Powering the global energy transition.</p>
                </div>
                <Button className="py-4 px-10 shadow-2xl animate-entrance bg-blue-600 hover:bg-blue-500 shadow-blue-200" style={{ animationDelay: '0.1s' }}>
                    Browse Projects
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                <Card className="border-l-4 border-blue-500" style={{ animationDelay: '0.1s' }}>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Total Capital</p>
                        <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-black text-slate-400">$</span>
                        <h3 className="text-5xl font-black text-slate-900">25,000</h3>
                    </div>
                    <p className="text-sm font-black text-blue-600 mt-4 inline-flex items-center px-4 py-1.5 bg-blue-50 rounded-full">
                        Across 4 Green Projects
                    </p>
                </Card>

                <Card className="border-l-4 border-emerald-500" style={{ animationDelay: '0.2s' }}>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">Est. ROI</p>
                        <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <h3 className="text-5xl font-black text-slate-900">12.4</h3>
                        <span className="text-xl font-black text-slate-400">%</span>
                    </div>
                    <p className="text-sm font-black text-emerald-600 mt-4 inline-flex items-center px-4 py-1.5 bg-emerald-50 rounded-full">
                        Annualized Yield
                    </p>
                </Card>

                <Card className="border-l-4 border-purple-500" style={{ animationDelay: '0.3s' }}>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-black text-purple-600 uppercase tracking-widest">ESG Score</p>
                        <div className="h-10 w-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <h3 className="text-5xl font-black text-slate-900">AAA</h3>
                    </div>
                    <p className="text-sm font-black text-purple-600 mt-4 inline-flex items-center px-4 py-1.5 bg-purple-50 rounded-full">
                        Platinum Status
                    </p>
                </Card>
            </div>

            <div className="animate-entrance" style={{ animationDelay: '0.4s' }}>
                <Card title="Active Invesments" className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                            <div>
                                <p className="font-black text-slate-900">Solar Farm X12</p>
                                <p className="text-xs font-bold text-slate-400">California, USA</p>
                            </div>
                            <p className="font-black text-emerald-600">+$1,240</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                            <div>
                                <p className="font-black text-slate-900">Wind Turbine Delta</p>
                                <p className="text-xs font-bold text-slate-400">Norway Offshore</p>
                            </div>
                            <p className="font-black text-emerald-600">+$890</p>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default InvestorDashboard;
