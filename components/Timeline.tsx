import React from 'react'
import Slot from './Slot'

function Timeline() {
    return (
        <div className="max-w-screen-2xl flex flex-col items-center w-full px-10 py-10">
            <aside className="space-y-4 w-full text-right h-1/3 flex flex-col justify-center">
                <h2 className="font-itc-avant xl:text-xl text-base tracking-[.4em] text-[#788596] uppercase">
                    ---Placeholder
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest xl:text-3xl text-xl">
                    The Timeline
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Ready!Set!Go!
                </h3>
            </aside>
            <section className="m-5 block md:hidden">
                <h3 className="text-xl">
                    {' '}
                    To see Timeline,
                    <br /> Please Open site in Desktop!
                </h3>
            </section>
            <section className="w-full justify-center space-x-4 p-4 hidden md:flex">
                <div className="grid auto-rows-auto gap-5 items-center">
                    <div className=" opacity-0">helo</div>
                    <Slot
                        align="right"
                        heading="0800"
                        event="Hackathon Begins"
                    />
                    <Slot
                        align="right"
                        heading="0800"
                        event="Hackathon Begins"
                    />
                    <Slot
                        align="right"
                        heading="0800"
                        event="Hackathon BeginsBeginsBeginsBegins"
                    />
                </div>
                <div className="border-4 border-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,5)]"></div>
                <div className="grid gap-10 items-center">
                    {' '}
                    <Slot
                        align="left"
                        heading="0800"
                        event="Hackathon BeginsBeginsBeginsBegins"
                    />
                    <Slot
                        align="left"
                        heading="0800"
                        event="Hackathon Begins"
                    />
                    <Slot
                        align="left"
                        heading="0800"
                        event="Hackathon Begins"
                    />
                    <div className=" opacity-0">helo</div>
                </div>
            </section>
        </div>
    )
}

export default Timeline
