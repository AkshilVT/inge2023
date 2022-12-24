import React from 'react'
import Image from 'next/image'

function Podium({ variant, name, money, perks }: any) {
    return (
        <>
            {variant === 0 ? (
                <div className="relative font-itc-avant">
                    <div className="absolute flex flex-col justify-center items-center w-full h-full">
                        <h2>{name}</h2>
                        <h1 className="text-3xl mt-2 text-glow">₹{money}</h1>
                        <p>Perks worth ₹{perks}</p>
                    </div>
                    <Image
                        src="/podium.svg"
                        width={400}
                        height={100}
                        alt="podium"
                    />
                </div>
            ) : (
                <div className="space-y-4 font-itc-avant w-[360px]">
                    <div className="w-full border-t-2 border-[#B1B1B1] bg-white/5">
                        <div className="flex justify-between items-center p-2">
                            <p className=" tracking-widest text-lg">{name}</p>
                            <p className=" tracking-widest text-3xl">
                                ₹{money}
                            </p>
                        </div>
                        <div className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)]"></div>
                    </div>
                    <div className="border-[#616161] border p-1">
                        <div className="flex justify-between items-center">
                            <p>Perks Worth</p>
                            <hr className="border w-1/2 border-[#616161]"></hr>
                            <p>₹{perks}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Podium
