import React from 'react'

function AboutUs() {
    return (
        <div className="max-w-screen-2xl flex flex-col justify-around items-center w-full sm:p-10 px-2 py-10">
            <div className="h-full sm:max-h-[642px] bg-[url('/aboutus.png')] bg-no-repeat bg-cover bg-right lg:bg-left w-full p-20">
                <aside className="space-y-4 w-full text-right">
                    <h2 className="font-itc-avant xl:text-xl text-base tracking-[.4em] text-[#788596] uppercase">
                        Hello There!
                    </h2>
                    <h1 className="font-itc-serif uppercase tracking-widest xl:text-3xl text-xl">
                        About Us
                    </h1>
                    <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                        Maybeone
                    </h3>
                </aside>
                <p className="float-right w-full xl:max-w-xl lg:max-w-md font-itc-serif xl:text-xl text-base tracking-wide mt-16 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    blanditiis adipisci obcaecati ullam sed, quos totam placeat
                    porro eum dolore quasi beatae atque necessitatibus in
                    aperiam! Optio, mollitia! Assumenda, nostrum fuga. Totam
                    fugiat fugit nisi at aliquam quo voluptate aspernatur odit!
                    In architecto minima eius blanditiis quidem amet placeat
                    fugit.
                </p>
            </div>
        </div>
    )
}

export default AboutUs
