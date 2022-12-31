import React from 'react'
import Image from 'next/image'

function Partners() {
    return (
        <>
            <div className="font-itc-avant space-y-5">
                <div className="">
                    <h2 className="text-xl w-full border-b-2">
                        Title Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3"></div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full  border-b-2">
                        Platinum Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3">
                        <a href="https://devfolio.co/" target="blank">
                            <Image
                                src={'/sponsors/platinum/devfolio.png'}
                                className=""
                                width={200}
                                height={200}
                                alt="Devfolio"
                            />
                        </a>
                        <a href="https://polygon.technology/" target="blank">
                            <Image
                                src={'/sponsors/platinum/polygon.png'}
                                className=""
                                width={200}
                                height={200}
                                alt="Polygon"
                            />
                        </a>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full  border-b-2">
                        Diamond Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3">
                        <a href="https://solana.com/" target="blank">
                            <Image
                                src={'/sponsors/diamond/solana.png'}
                                className=""
                                width={200}
                                height={200}
                                alt="Solana"
                            />
                        </a>
                        <a href="https://filecoin.io/" target="blank">
                            <Image
                                src={'/sponsors/diamond/filecoin.png'}
                                className=""
                                width={200}
                                height={200}
                                alt="Filecoin"
                            />
                        </a>
                        <a href="https://replit.com/" target="blank">
                            <Image
                                src={'/sponsors/diamond/replit.png'}
                                className=""
                                width={200}
                                height={200}
                                alt="Replit"
                            />
                        </a>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full  border-b-2">
                        Gold Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3"></div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full  border-b-2">
                        Silver Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3"></div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full  border-b-2">
                        Bronze Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3"></div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl w-full border-b-2">
                        Previous Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3"></div>
                </div>
            </div>
        </>
    )
}

export default Partners
