import React from 'react'
import Image from 'next/image'

function SponsorList() {
    const [open, setOpen] = React.useState(0)
    return (
        <div className="flex absolute z-10 w-full space-x-4">
            <div
                className={
                    ' p-4 border-white ' +
                    (open === 1 ? 'w-full border-4' : 'w-1/6 border-r-4')
                }
            >
                <h1
                    className="sponsor text-3xl cursor-pointer "
                    onClick={() => {
                        open === 1 ? setOpen(0) : setOpen(1)
                    }}
                >
                    Title
                </h1>
                {open === 1 && (
                    <div className="w-full grid grid-cols-3 items-center">
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
                )}
            </div>
            <div
                className={
                    ' p-4 border-white ' +
                    (open === 2 ? 'w-full border-4' : 'w-1/6 border-r-4')
                }
            >
                <h1
                    className="sponsor text-3xl cursor-pointer"
                    onClick={() => {
                        open === 2 ? setOpen(0) : setOpen(2)
                    }}
                >
                    Associate
                </h1>
                {open === 2 && (
                    <div className="w-full grid grid-cols-3 items-center">
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
                )}
            </div>
            <div
                className={
                    ' p-4 border-white ' +
                    (open === 3 ? 'w-full border-4' : 'w-1/6 border-r-4')
                }
            >
                <h1
                    className="sponsor text-3xl cursor-pointer"
                    onClick={() => {
                        open === 3 ? setOpen(0) : setOpen(3)
                    }}
                >
                    Platinum
                </h1>
                {open === 3 && (
                    <div className="w-full grid grid-cols-3 items-center">
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
                )}
            </div>
            <div
                className={
                    ' p-4 border-white ' +
                    (open === 4 ? 'w-full border-4' : 'w-1/6 border-r-4')
                }
            >
                <h1
                    className="sponsor text-3xl cursor-pointer"
                    onClick={() => {
                        open === 4 ? setOpen(0) : setOpen(4)
                    }}
                >
                    Diamond
                </h1>
                {open === 4 && (
                    <div className="w-full grid grid-cols-3 items-center">
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
                )}
            </div>
            <div
                className={
                    ' p-4 border-white ' +
                    (open === 5 ? 'w-full border-4' : 'w-1/6 border-r-4')
                }
            >
                <h1
                    className="sponsor text-3xl cursor-pointer"
                    onClick={() => {
                        open === 5 ? setOpen(0) : setOpen(5)
                    }}
                >
                    Gold
                </h1>
                {open === 5 && (
                    <div className="w-full grid grid-cols-3 items-center">
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
                )}
            </div>
            <div
                className={
                    ' p-4 border-white ' +
                    (open === 6 ? 'w-full border-4' : 'w-1/6 border-r-4')
                }
            >
                <h1
                    className="sponsor text-3xl cursor-pointer"
                    onClick={() => {
                        open === 6 ? setOpen(0) : setOpen(6)
                    }}
                >
                    Silver
                </h1>
                {open === 6 && (
                    <div className="w-full grid grid-cols-3 items-center">
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
                )}
            </div>
            <div
                className={
                    ' p-4 border-white ' +
                    (open === 7 ? 'w-full border-4' : 'w-1/6 border-r-4')
                }
            >
                <h1
                    className="sponsor text-3xl cursor-pointer"
                    onClick={() => {
                        open === 7 ? setOpen(0) : setOpen(7)
                    }}
                >
                    Bronze
                </h1>
                {open === 7 && (
                    <div className="w-full grid grid-cols-3 items-center">
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
                )}
            </div>
        </div>
    )
}

export default SponsorList
