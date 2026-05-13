import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4F7FC] relative overflow-hidden px-4 py-10">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0D3674]/10 rounded-full blur-[100px] pointer-events-none"></div>
            {/* Custom Animations */}
            <style>
                {`
                    @keyframes waterDrop {
                        0% { transform: translateY(0) scaleY(0.8) scaleX(1); opacity: 0; }
                        10% { transform: translateY(10px) scaleY(1.2) scaleX(0.9); opacity: 1; }
                        80% { transform: translateY(110px) scaleY(1.1) scaleX(0.9); opacity: 1; }
                        90% { transform: translateY(120px) scaleY(0.5) scaleX(1.5); opacity: 0.5; }
                        100% { transform: translateY(120px) scaleY(0) scaleX(2); opacity: 0; }
                    }
                    @keyframes ripple {
                        0% { transform: scale(0.5); opacity: 1; border-width: 4px; }
                        100% { transform: scale(3); opacity: 0; border-width: 0px; }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    .animate-water-drop {
                        animation: waterDrop 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .animate-ripple {
                        animation: ripple 2s infinite ease-out;
                        animation-delay: 1.8s; /* Sync with water drop hitting the bottom */
                    }
                    .animate-float {
                        animation: float 4s ease-in-out infinite;
                    }
                `}
            </style>
            {/* Premium Glass-like Card */}
            <div className="relative z-10 w-full max-w-[850px] bg-white/80 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_60px_-15px_rgba(13,54,116,0.15)] border border-white/50 p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side: Premium Animated Illustration */}
                <div className="relative w-[200px] h-[300px] shrink-0 animate-float hidden lg:block">
                    {/* SVG Metallic Pipe */}
                    <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 drop-shadow-2xl z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="pipeMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#718096" />
                                <stop offset="20%" stopColor="#CBD5E0" />
                                <stop offset="50%" stopColor="#A0AEC0" />
                                <stop offset="80%" stopColor="#E2E8F0" />
                                <stop offset="100%" stopColor="#4A5568" />
                            </linearGradient>
                            <linearGradient id="pipeJoint" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4A5568" />
                                <stop offset="50%" stopColor="#718096" />
                                <stop offset="100%" stopColor="#2D3748" />
                            </linearGradient>
                        </defs>
                        {/* Main Horizontal Pipe */}
                        <path d="M-20 20 H 50 A 20 20 0 0 1 70 40 V 80" stroke="url(#pipeMetal)" strokeWidth="24" strokeLinecap="round" />
                        {/* Joints */}
                        <rect x="44" y="60" width="28" height="12" rx="3" fill="url(#pipeJoint)" />
                        <rect x="46" y="80" width="24" height="8" rx="2" fill="url(#pipeMetal)" />
                        {/* Dark inner hole */}
                        <ellipse cx="58" cy="88" rx="8" ry="3" fill="#1A202C" />
                    </svg>
                    {/* Water Animation Area */}
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-[200px]">
                        {/* The Falling Drop */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-6 bg-linear-to-b from-blue-300 to-blue-600 rounded-[50%_50%_50%_50%] animate-water-drop shadow-[0_0_20px_rgba(37,99,235,0.6)] z-0"></div>
                        {/* The Ripple Effect at the bottom */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-4 border-blue-400 rounded-full animate-ripple z-0"></div>
                    </div>
                </div>
                {/* Right Side: Typography & Content */}
                <div className="text-center lg:text-left flex-1">
                    <div className="inline-block px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                        <span className="text-[#0D3674] font-bold tracking-widest uppercase text-xs">Error 404</span>
                    </div>
                    <h1 className="text-6xl lg:text-[100px] font-black text-transparent bg-clip-text bg-linear-to-r from-[#0D3674] to-blue-500 leading-none mb-4 tracking-tighter drop-shadow-sm">
                        Oh no!
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6 tracking-tight">
                        We've Found A Major Leak.
                    </h2>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                        The page you are looking for has been washed away or doesn't exist anymore. Let our professionals redirect you to dry land.
                    </p>
                    {/* Premium Button */}
                    <Link to={"/"}>
                        <Button 
                            btnText={"Back To Homepage"} 
                            className={"px-8 py-4 bg-linear-to-r from-[#0D3674] to-blue-700 text-white lg:text-[16px] text-base font-bold uppercase rounded-[30px] hover:shadow-[0_10px_30px_rgba(13,54,116,0.3)] hover:-translate-y-1 transition-all duration-300"}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;