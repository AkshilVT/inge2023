import React from 'react'

function Slot({ align, heading, event }: any) {
    return (
        <div
            className={
                'space-y-4 relative font-itc-avant max-w-[450px] my-8 ' +
                (align === 'left' ? 'text-left' : 'text-right')
            }
        >
            <p
                className={
                    'absolute  ' +
                    (align === 'right'
                        ? '-right-3 top-[7px]'
                        : ' -left-3 rotate-180 top-[9px]')
                }
            >
                ►
            </p>
            <div className="w-full border-b-2 border-[#B1B1B1] bg-white/5">
                <div className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)] w-full"></div>
                <div className="flex flex-col justify-between p-4 w-full space-y-4">
                    <p className="w-full tracking-widest text-2xl">{heading}</p>
                    <p className="text-white/40 tracking-widest">{event}</p>
                </div>
            </div>
        </div>
    )
}

export default Slot
