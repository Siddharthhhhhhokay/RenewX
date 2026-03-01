import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const baseStyles = "relative px-8 py-3.5 rounded-2xl font-bold transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 overflow-hidden group";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-200/50 hover:shadow-emerald-300",
    secondary: "glass-premium text-emerald-700 border-white/40 hover:bg-white/80 shadow-lg",
    ghost: "text-emerald-800 hover:bg-white/40 font-black tracking-tight",
    danger: "bg-red-500 text-white shadow-xl shadow-red-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 shimmer-active opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
