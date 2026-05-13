import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#f8fafc] px-4 py-16 relative overflow-hidden">
            <style>
                {`
                    @keyframes drop {
                        0% { transform: translateY(0px) scale(0.8); opacity: 0; }
                        20% { transform: translateY(10px) scale(1); opacity: 1; border-radius: 50% 50% 50% 50%; }
                        80% { transform: translateY(60px) scale(0.9) scaleY(1.2); opacity: 1; border-radius: 50% 50% 50% 50%; }
                        100% { transform: translateY(90px) scale(0.5); opacity: 0; }
                    }
                    .animate-drop {
                        animation: drop 2s infinite cubic-bezier(0.5, 0, 1, 1);
                    }
                    .animate-drop-delayed {
                        animation: drop 2s infinite cubic-bezier(0.5, 0, 1, 1);
                        animation-delay: 1s;
                    }
                `}
            </style>
            <div className="text-center flex flex-col items-center w-full max-w-2xl z-10">
                
                {/* CSS Animated Plumbing Pipe */}
                <div className="relative w-full max-w-[250px] mx-auto h-40 flex justify-center mb-4">
                    {/* Horizontal Pipe */}
                    <div className="absolute top-0 w-full h-10 bg-linear-to-b from-gray-400 via-gray-500 to-gray-700 rounded-sm shadow-lg border-b border-gray-800">
                        {/* Pipe joint detail */}
                        <div className="absolute left-4 -top-0.5 w-6 h-11 bg-gray-600 rounded-sm border-r border-l border-gray-800"></div>
                        <div className="absolute right-4 -top-0.5 w-6 h-11 bg-gray-600 rounded-sm border-r border-l border-gray-800"></div>
                    </div>
                    
                    {/* Vertical Spout */}
                    <div className="absolute top-10 w-12 h-10 bg-linear-to-r from-gray-500 to-gray-700 rounded-b-lg shadow-md border-b-4 border-gray-800 z-10"></div>
                    
                    {/* Animated Water Drops */}
                    <div className="absolute top-[75px] w-5 h-5 bg-blue-500 rounded-[50%_50%_50%_50%] animate-drop shadow-[0_0_15px_rgba(59,130,246,0.6)] z-0"></div>
                    <div className="absolute top-[75px] w-4 h-4 bg-blue-400 rounded-[50%_50%_50%_50%] animate-drop-delayed shadow-[0_0_15px_rgba(59,130,246,0.6)] z-0"></div>
                    
                    {/* Small puddle at the bottom */}
                    <div className="absolute bottom-4 w-16 h-2 bg-blue-500/30 rounded-full blur-[2px] animate-pulse"></div>
                </div>
                {/* 404 Error Text */}
                <h1 className="text-7xl lg:text-8xl font-black text-[#0D3674] leading-none mb-2 tracking-tighter">
                    404
                </h1>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 uppercase">
                    We've Found A Leak!
                </h2>
                
                <p className="text-base lg:text-lg text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
                    Oops! The page you're looking for seems to have washed away. Don't worry, our expert plumbers can get you back to the homepage.
                </p>
                {/* Themed Button */}
                <Link to={"/"}>
                    <Button 
                        btnText={"Fix The Leak (Home)"} 
                        className={"px-8 py-4 bg-[#0D3674] text-white lg:text-[18px] text-base font-bold uppercase rounded-[30px] hover:bg-blue-600 transition-colors duration-300 shadow-xl"}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Error;