import React from 'react'
import Image from 'next/image'
import Podium from './Podium'

function Prizes() {
    return (
        <div className="max-w-screen-2xl h-screen flex flex-col justify-around items-center w-full px-10 relative">
            <aside className="space-y-4 w-full text-right h-1/3 flex flex-col justify-center">
                <h2 className="font-itc-avant xl:text-xl text-base tracking-[.4em] text-[#788596] uppercase">
                    ---Placeholder
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest xl:text-3xl text-xl">
                    The Prizes
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Trulyone
                </h3>
            </aside>
            <div className="absolute xl:top-10 lg:top-5 top-0 lg:left-0 -left-20 rotate-[17deg]">
                <Image
                    src="/yoda.png"
                    width={400}
                    height={400}
                    alt="Yoda"
                    className="xl:scale-100 lg:scale-75 scale-50 md:block hidden"
                />
            </div>
            <div className="flex flex-col justify-around w-full h-full">
                <div className="flex justify-center w-full">
                    <Podium
                        variant={0}
                        name="1st Place"
                        money="12000"
                        perks="25000"
                    />
                </div>
                <div className="flex justify-around items-center md:flex-row flex-col space-y-5 mt-5 md:space-y-0">
                    <Podium
                        variant={0}
                        name="2st Place"
                        money="10000"
                        perks="25000"
                    />
                    <Podium
                        variant={0}
                        name="3st Place"
                        money="8000"
                        perks="25000"
                    />
                </div>
                <div className="flex justify-between items-center md:flex-row flex-col space-y-5 mt-5 md:space-y-0">
                    <Podium
                        variant={1}
                        name="Best Beginner Hack"
                        money="2000"
                        perks="25000"
                    />
                    <Podium
                        variant={1}
                        name="Most Pretty Hack"
                        money="2000"
                        perks="25000"
                    />
                </div>
            </div>
        </div>
    )
}

export default Prizes
