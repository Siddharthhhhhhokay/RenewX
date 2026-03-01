import React from 'react';

const Card = ({ children, title, className = "" }) => {
    return (
        <div className={`glass-premium rounded-3xl p-1 overflow-hidden hover-glow animate-entrance ${className}`}>
            <div className="bg-white/20 rounded-[22px] overflow-hidden backdrop-blur-sm">
                {title && (
                    <div className="px-8 py-6 border-b border-white/10">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{title}</h3>
                    </div>
                )}
                <div className="px-8 py-8 font-semibold text-slate-700">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;
