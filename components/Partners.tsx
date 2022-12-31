import React from 'react'
import Image from 'next/image'

function Partners() {
    return (
        <>
            <div className="font-itc-avant space-y-5">
                <div className="">
                    <h2 className="text-xl w-full border-b-2">Partners</h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3">
                        <Image
                            src={'/sponsors/partners/normal/aops.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="aops"
                        />
                        <Image
                            src={'/sponsors/partners/normal/echo3d.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="echo3d"
                        />
                        <Image
                            src={'/sponsors/partners/normal/interviewCake.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="interviewCake"
                        />
                        <Image
                            src={'/sponsors/partners/normal/taskade.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="taskade"
                        />
                        <Image
                            src={'/sponsors/partners/normal/wolfram.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="wolfram"
                        />
                        <Image
                            src={'/sponsors/partners/normal/xyz.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="xyz"
                        />
                    </div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full  border-b-2">
                        Community Partners
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3">
                        <a href="https://www.sudanstech.com/" target="blank">
                            <Image
                                src={
                                    '/sponsors/partners/community/sudansTech.png'
                                }
                                className=""
                                width={200}
                                height={200}
                                alt="Devfolio"
                            />
                        </a>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full  border-b-2">
                        Hiring Partners
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3"></div>
                </div>
                <div className="">
                    <h2 className="text-xl w-full border-b-2">
                        Streaming Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3"></div>
                </div>
                <div className="pt-10">
                    <h2 className="text-xl w-full border-b-2">
                        Previous Sponsors
                    </h2>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-5 place-items-center gap-3">
                        <Image
                            src={'/sponsors/previous/tezos.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="tezos"
                        />
                        <Image
                            src={'/sponsors/previous/1p.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="1p"
                        />
                        <Image
                            src={'/sponsors/previous/balsamiq.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="balsamiq"
                        />
                        <Image
                            src={'/sponsors/previous/celo.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="celo"
                        />
                        <Image
                            src={'/sponsors/previous/hackclub.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="hackclub"
                        />
                        <Image
                            src={'/sponsors/previous/stickerMule.png'}
                            className=""
                            width={200}
                            height={200}
                            alt="stickerMule"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners
