import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
// import Timer from './Timer';
const Timer = dynamic(() => import('./Timer'), { ssr: false })
function Hero() {
    return (
        <div className="max-w-screen-2xl flex flex-col justify-around items-center w-full">
            <aside className="space-y-4 w-full text-right">
                <h2 className="font-itc-avant text-xl tracking-[.4em] text-[#788596] uppercase">
                    Join us at
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest text-3xl">
                    28<sup>th</sup> - 29<sup>th</sup> of Jan 2023
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Made by yours
                </h3>
            </aside>
            <div className="relative w-full text-center mt-32">
                <h2 className="text-7xl scale-125 opacity-10 font-star-hollow tracking-widest absolute -top-10  w-full">
                    ingenious HACKATHoN
                </h2>
                <h2 className="text-5xl font-star tracking-widest">
                    ingenious HACKATHoN
                </h2>
            </div>
            <div className="space-x-2 mt-[4rem]">
                <motion.div
                    className="bg-black w-screen h-screen fixed !z-10 top-0 left-0"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 3, delay: 0 }}
                />
                <motion.div
                    className="!z-50"
                    animate={{
                        opacity: [0, 1, 1],
                        scale: [0.5, 1, 1],
                        rotate: [-90, -90, 0],
                    }}
                    transition={{ duration: 2, delay: 0 }}
                >
                    <Image
                        src="/saber-green.png"
                        width={700}
                        height={700}
                        className="!z-50"
                        alt={'Green Saber'}
                    />
                </motion.div>
                <Timer deadline="2023-01-28" />
            </div>
        </div>
    )
}

export default Hero
