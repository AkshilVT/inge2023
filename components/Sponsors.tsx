import React from 'react'
import Image from 'next/image'
import SponsorList from './SponsorList'
import Partners from './Partners'

function Sponsors() {
    return (
        <div className="max-w-screen-2xl w-full md:space-y-5 space-y-10 px-10 relative py-10">
            <aside className="space-y-4 lg:float-right text-right flex flex-col justify-center">
                <h2 className="font-itc-avant xl:text-xl text-base tracking-[.4em] text-[#788596] uppercase">
                    The Force Awakens
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest xl:text-3xl text-xl">
                    The Sponsors
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Money$$
                </h3>
            </aside>
            <div className="flex space-x-8 items-center justify-start">
                <div className="relative w-72 h-72 md:flex justify-center items-end hidden">
                    <Image
                        className="absolute top-0 left-0 z-10 scale-75 lg:scale-100"
                        src="/sponsor-nl.png"
                        width={300}
                        height={300}
                        alt="R2D2"
                    />
                    <div className=" w-60 h-60 bg-[#FEE4B7] opacity-50 blur-[136px]"></div>
                </div>
                <div className="relative h-[100px] w-full">
                    <a
                        href="#footer"
                        className="text-[#788596] xl:text-3xl text-xl font-itc-avant cursor-pointer absolute inset-0 z-10 hover:text-white/90"
                    >
                        Interested in Working with Us?
                    </a>
                </div>
            </div>
            <div className=" space-y-16 text-center">
                <h1 className="text-[#788596] xl:text-3xl text-xl font-itc-avant">
                    Sponsors
                </h1>
                <div className="md:relative w-full md:h-[1500px] lg:h-[500px]">
                    <SponsorList />
                </div>
                <h1 className="text-[#788596] xl:text-3xl text-xl font-itc-avant">
                    Partners
                </h1>
                <div className="w-full">
                    <Partners />
                </div>
            </div>
            {/* <div className=" space-y-16 text-center">
                <h1 className="text-[#788596] xl:text-3xl text-xl font-itc-avant">
                    Previous Sponsors
                </h1>
                <div className="relative w-full h-[2100px] md:h-[1500px] lg:h-[500px]">
                    <SponsorList />
                </div>
            </div> */}
        </div>
    )
}

export default Sponsors
