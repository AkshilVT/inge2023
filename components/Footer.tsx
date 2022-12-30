import React from 'react'

function Footer() {
    return (
        <div className="w-full max-w-screen-2xl " id="footer">
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
                    <div className="relative h-[300px] lg:h-[200px]">
                        <div className="absolute z-20 inset-0">
                            <div className="grid grid-cols-2 lg:grid-cols-3 text-center gap-8">
                                <a
                                    className="p-4 border border-white/40 hover:bg-white/40 cursor-pointer"
                                    href="mailto:ingenium@ahduni.edu.in"
                                >
                                    Mail
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tech-ingenium/"
                                    target="blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-white/40 hover:bg-white/40 cursor-pointer"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    className="p-4 border border-white/40 hover:bg-white/40 cursor-pointer"
                                    target="blank"
                                    rel="noopener noreferrer"
                                    href="https://discord.gg/SWy9zmpj5r"
                                >
                                    Discord
                                </a>
                                <a
                                    href="https://www.instagram.com/tech.ingenium/?hl=en"
                                    target="blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-white/40 hover:bg-white/40 cursor-pointer"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="tel:+91-8320161492"
                                    className="p-4 border border-white/40 hover:bg-white/40 cursor-pointer"
                                >
                                    Kavan Gondalia
                                </a>
                                <a
                                    href="tel:+91-7220020004"
                                    className="p-4 border border-white/40 hover:bg-white/40 cursor-pointer"
                                >
                                    Prasan Singh
                                </a>
                            </div>
                            <h2 className="text-xl font-itc-serif text-white/70 text-center mt-4">
                                Designed & Developed by{' '}
                                <span className="px-2 underline hover:text-white cursor-pointer">
                                    <a
                                        href="https://github.com/AkshilVT"
                                        target="blank"
                                        rel="noopener noreferrer"
                                    >
                                        Akshil Thumar
                                    </a>
                                </span>
                                &
                                <span className="px-2 underline hover:text-white cursor-pointer">
                                    <a
                                        href="https://github.com/priyajani028"
                                        target="blank"
                                        rel="noopener noreferrer"
                                    >
                                        Priya Jani
                                    </a>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
