import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Contact = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-24 pb-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="animate-entrance mb-20 text-center">
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-8">
                            Let's <span className="text-emerald-500">Connect</span>.
                        </h1>
                        <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">
                            Our team is ready to help you navigate the future of green energy marketplace.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-16 items-start">
                        <div className="lg:col-span-2 space-y-12 animate-entrance" style={{ animationDelay: '0.1s' }}>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Visit Us</h3>
                                <p className="text-lg text-slate-500 font-bold leading-relaxed">
                                    123 Sustainability Way<br />
                                    Emerald City, EC 54321
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Email Us</h3>
                                <p className="text-lg text-slate-500 font-bold leading-relaxed">
                                    hello@renewx.io<br />
                                    support@renewx.io
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4 mt-4">
                                    <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                    </div>
                                    <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 animate-entrance" style={{ animationDelay: '0.2s' }}>
                            <Card className="p-1">
                                <div className="p-10 space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <InputField label="Full Name" placeholder="John Doe" />
                                        <InputField label="Email Address" placeholder="john@example.com" />
                                    </div>
                                    <InputField label="Subject" placeholder="How can we help?" />
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Message</label>
                                        <textarea
                                            className="w-full bg-slate-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-emerald-500 font-bold text-slate-900 min-h-[160px]"
                                            placeholder="Your message here..."
                                        />
                                    </div>
                                    <Button className="w-full py-5 text-xl">Send Message</Button>
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

const InputField = ({ label, placeholder }) => (
    <div className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">{label}</label>
        <input
            type="text"
            className="w-full bg-slate-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-emerald-500 font-bold text-slate-900"
            placeholder={placeholder}
        />
    </div>
);

export default Contact;
