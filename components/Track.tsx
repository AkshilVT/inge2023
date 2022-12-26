import React from 'react'

function Track({ track, money, desc }: any) {
    return (
        <div className="space-y-4 font-itc-avant max-w-[450px] my-8">
            <div className="w-full border-b-2 border-[#B1B1B1] bg-white/5">
                <div className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)] w-full"></div>
                <div className="flex flex-col justify-between items-center p-4 w-full space-y-3">
                    <p className="w-full tracking-widest text-2xl">{track}</p>
                    <p className="w-full text-lg text-white/60">
                        Track Prize: ₹{money}
                    </p>
                    <p className="text-white/40 tracking-widest">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Track
