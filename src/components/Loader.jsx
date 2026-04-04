import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#F9F9F9] to-[#E5E7EB]">
            <div className="relative flex items-center justify-center mt-[-50px]">
                <div className="absolute w-32 h-32 border-4 border-transparent border-t-[#DD3142] border-b-[#0D3674] rounded-full animate-spin shadow-[0_0_20px_rgba(13,54,116,0.3)]"></div>
                <div 
                    className="absolute w-24 h-24 border-4 border-transparent border-l-[#0D3674] border-r-[#DD3142] rounded-full animate-spin" 
                    style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse z-10">
                    <span className="text-[#0D3674] font-black text-xl tracking-tighter">FBH</span>
                </div>
            </div>
            <div className="mt-14 flex flex-col items-center">
                <h2 className="text-[22px] font-bold text-[#0D3674] tracking-[0.2em] uppercase">
                    FB Harris
                </h2>
                <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs font-semibold text-[#6D6D6D] uppercase tracking-widest">
                        Loading Experience
                    </span>
                    <span className="flex gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-[#DD3142] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-[#DD3142] rounded-full animate-bounce" style={{ animationDelay: '50ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-[#DD3142] rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                    </span>
                </div>
            </div>
            
        </div>
    );
};

export default Loader;