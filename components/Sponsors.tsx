import React from 'react'
import Image from 'next/image'

function Sponsors() {
    return (
        <div className="max-w-screen-2xl bg-black h-screen w-full px-10 relative py-10">
            <aside className="space-y-4 float-right flex flex-col justify-center">
                <h2 className="font-itc-avant text-xl tracking-[.4em] text-[#788596] uppercase">
                    The Force Awakens
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest text-3xl">
                    The Sponsors
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Money $$ baby
                </h3>
            </aside>
            <div className="flex space-x-8 items-center justify-start">
                <div className="relative w-72 h-72 flex justify-center items-end">
                    <Image
                        className="absolute top-0 left-0 z-10"
                        src="/sponsor-nl.png"
                        width={300}
                        height={300}
                        alt="R2D2"
                    />
                    <div className=" w-60 h-60 bg-[#FEE4B7] opacity-50 blur-[136px]"></div>
                </div>
                <h1 className="text-[#788596] text-3xl font-itc-avant">
                    Interested in Working with Us?
                </h1>
            </div>
            <div className="space-y-8 text-center">
                <h1 className="text-[#788596] text-3xl font-itc-avant">
                    Previous Sponsors
                </h1>
                <div className="bg-[url('/sponsorList2.png')] bg-no-repeat">
                    <div className="w-full flex justify-around items-center">
                        <Image
                            src={'/sponsors/polygon.png'}
                            className=""
                            width={150}
                            height={150}
                            alt="Polygon"
                        />
                        <Image
                            src={'/sponsors/filecoin.png'}
                            className=""
                            width={80}
                            height={80}
                            alt="Polygon"
                        />
                    </div>
                </div>
                {/* <div className=" flex flex-col justify-center items-center w-full h-full bg-[url('/sponsorList.svg')] bg-cover bg-no-repeat">
                    <div className="w-full flex justify-around items-center">
                        <Image
                            src={'/sponsors/polygon.png'}
                            className=""
                            width={150}
                            height={150}
                            alt="Polygon"
                        />
                        <Image
                            src={'/sponsors/filecoin.png'}
                            className=""
                            width={80}
                            height={80}
                            alt="Polygon"
                        />
                    </div>
                    <div className="w-full flex justify-around items-center">
                        <Image
                            src={'/sponsors/polygon.png'}
                            className=""
                            width={150}
                            height={150}
                            alt="Polygon"
                        />
                        <Image
                            src={'/sponsors/devfolio.png'}
                            className=""
                            width={150}
                            height={150}
                            alt="Polygon"
                        />
                        <Image
                            src={'/sponsors/filecoin.png'}
                            className=""
                            width={80}
                            height={80}
                            alt="Polygon"
                        />
                    </div>
                    <div className="w-full flex justify-around items-center">
                        <Image
                            src={'/sponsors/polygon.png'}
                            className=""
                            width={150}
                            height={150}
                            alt="Polygon"
                        />
                        <Image
                            src={'/sponsors/filecoin.png'}
                            className=""
                            width={80}
                            height={80}
                            alt="Polygon"
                        />
                    </div>
                    <div className="w-full flex justify-around items-center">
                        <Image
                            src={'/sponsors/polygon.png'}
                            className=""
                            width={150}
                            height={150}
                            alt="Polygon"
                        />
                        <Image
                            src={'/sponsors/devfolio.png'}
                            className=""
                            width={150}
                            height={150}
                            alt="Polygon"
                        />
                        <Image
                            src={'/sponsors/filecoin.png'}
                            className=""
                            width={80}
                            height={80}
                            alt="Polygon"
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Sponsors
