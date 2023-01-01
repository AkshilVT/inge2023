import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
const Timer = dynamic(() => import('./Timer'), { ssr: false })
function Hero() {
    React.useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://apply.devfolio.co/v2/sdk.js'
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="max-w-screen-2xl h-screen flex flex-col justify-around items-center w-full bg-[url('/herobg.png')] bg-no-repeat bg-cover md:px-10">
            <aside className="space-y-4 w-full text-right">
                <h2 className="font-itc-avant xl:text-xl text-base tracking-[.4em] text-[#788596] uppercase">
                    Join us at
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest xl:text-3xl text-xl">
                    28<sup>th</sup> - 29<sup>th</sup> of Jan 2023
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Madebyyours
                </h3>
            </aside>
            <div className="relative w-full text-center">
                <h2 className="xl:text-7xl text-5xl scale-125 opacity-10 font-star-hollow tracking-widest absolute -top-10  w-full hidden lg:block">
                    ingenious HACKATHoN
                </h2>
                <h2 className="sm:text-5xl text-4xl font-star tracking-widest">
                    ingenious HACKATHoN
                </h2>
            </div>
            <div className="h-1/2 flex flex-col justify-around">
                <motion.div
                    className="bg-black w-screen h-screen fixed !z-10 top-0 left-0"
                    animate={{
                        opacity: [1, 0],
                        // visibility: ['block', 'hidden'],
                    }}
                    transition={{ duration: 3, delay: 0 }}
                />
                <motion.div
                    className="!z-50"
                    animate={{
                        opacity: [0, 1, 1],
                        scale: [150, 1, 1],
                        rotate: [-90, -90, 0],
                    }}
                    transition={{ duration: 2, delay: 0 }}
                >
                    <Image
                        src="/saber-green.png"
                        width={700}
                        height={700}
                        className="!z-50 scale-75 md:scale-100"
                        alt={'Green Saber'}
                    />
                </motion.div>
                <Timer deadline="2023-01-28" />
                <div className="justify-center mx-auto relative">
                    <div
                        className="apply-button absolute inset-0 !z-50 cursor-pointer"
                        data-hackathon-slug="ingenious-hackathon-4"
                        data-button-theme="dark-inverted"
                        style={{ height: '44px', width: '312px' }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
