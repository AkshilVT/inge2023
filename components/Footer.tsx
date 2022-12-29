import React from 'react'

function Footer() {
    return (
        <div className="w-full max-w-screen-2xl h-max">
            <div className="border-8 w-full shadow-[0_0px_7.5px_0px_rgba(255,255,255,5)]"></div>
            <div className="h-full flex flex-col justify-between items-center w-full p-10 relative bg-[url('/footer.png')] bg-no-repeat bg-cover bg-center md:bg-left">
                <div className="space-y-4 font-itc-avant max-w-[450px] my-8">
                    <div className="w-full border-b-2 border-[#B1B1B1] bg-white/5">
                        <div className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)] w-full"></div>
                        <div className="flex flex-col justify-between items-center p-4 w-full space-y-4">
                            <p className="w-full tracking-widest text-2xl">
                                Organizers Address
                            </p>
                            <p className="text-white/40 tracking-widest">
                                School of Engineering and Applied Science,
                                Ahmedabad University Commerce Six Roads,
                                Navrangpura, Ahmedabad- 380009
                            </p>
                        </div>
                    </div>
                </div>
                <div className="font-itc-avant flex flex-col w-full">
                    <h1 className="text-3xl text-white/50 h-20">CONTACT US</h1>
                    <div className="grid grid-cols-2 text-center gap-8">
                        <p className="p-4 border border-white/40">Mail</p>
                        <p className="p-4 border border-white/40">Insta</p>
                        <p className="p-4 border border-white/40">kavan</p>
                        <p className="p-4 border border-white/40">prasan</p>
                    </div>
                    <h2 className="text-xl font-itc-serif text-white/70 text-center mt-4">
                        Designed & Developed by{' '}
                        <span className="px-2 underline">Akshil Thumar</span>&
                        <span className="px-2 underline">Priya Jani</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
