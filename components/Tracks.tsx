import React from 'react'
import STrack from './STrack'
import Track from './Track'

function Tracks() {
    return (
        <div className="max-w-screen-2xl w-full px-10 py-10">
            <aside className="space-y-4 text-right flex flex-col justify-center">
                <h2 className="font-itc-avant xl:text-xl text-base tracking-[.4em] text-[#788596] uppercase">
                    Welcome to Dark side
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest xl:text-3xl text-xl">
                    The Tracks
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Choose
                </h3>
            </aside>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-8">
                <Track
                    track="Open Source"
                    money="2500"
                    desc="Theme Track - Build Something That Can Later Be Used By Anyone Around The World. There's A Whole Lot Of Innovation Possible Here But You'll Have To Be Good And Give It To The World."
                />
                <Track
                    track="Business"
                    money="2500"
                    desc="Build An Innovation Which Helps Small Businesses To Scale Or Help Them To Reduce Burden. For Example: Innovation In Supply Chain, Money Transfer, Invoice Generation, Etc."
                />
                <Track
                    track="Healthcare"
                    money="2500"
                    desc="Create Innovative Solutions That Address
Various Health-Related Issues And
Challenges Such As The COVID 19 Pandemic,
Mental Health, Obesity, Cardiovascular
Diseases And Many More."
                />
                <Track
                    track="Security Net"
                    money="2500"
                    desc="Build Safer that
Can Range From Saving Humanity From
Aliens To Saving Yourself From Your Neighbour's
Kid To
Making Your Area Safer From The Creeps That
Make It."
                />
                <Track
                    track="Fintech"
                    money="3000"
                    desc="Solve Intriguing Challenges Faced By The
Fin-Tech Industry By Automating, Securing
And Enhancing The Delivery And Operation
Of Financial Technology."
                />
                <Track
                    track="Web3"
                    money="3000"
                    desc="Build Something On Web3. Cather A Group
Of Technology Stacks, Including Blockchain
Layer, Protocol Layer And DApps. Build
Innovative Things Capable Of Startup."
                />
            </div>
            <div className="w-full grid lg:grid-cols-2 gap-5">
                <div className="w-full p-2 space-y-2 !z-50">
                    <div className="flex items-center">
                        <h1 className="pr-2 tracking-widest lg:text-2xl text-lg">
                            Polygon
                        </h1>
                        <hr className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)] w-full" />
                    </div>
                    <p className="text-white/80 tracking-widest text-base">
                        Polygon is a protocol and a framework for building and
                        connecting Ethereum-compatible blockchain networks.
                    </p>
                    <ul className=" list-disc">
                        <p>Prizes up for grab:</p>
                        <li className="text-white/80 tracking-widest text-base">
                            ₹10,000 for the best hack built on Ethereum, or
                        </li>
                        <li className="text-white/80 tracking-widest text-base">
                            ₹15,000 for the best hack built on Ethereum +
                            Polygon,
                        </li>
                        <li className="text-white/80 tracking-widest text-base">
                            Eligibility to apply for internship/full-time roles
                            and seed funding of up to 5,000 USD for winners!
                        </li>
                    </ul>
                    <p className="text-white/80 text-base !z-50">
                        {' '}
                        Read about the bounty details and find code templates
                        for Polygon here:
                        <a
                            href="https://nsb.dev/polygon-bounty"
                            target="blank"
                            className="text-white/80 pl-2 text-lg underline cursor-pointer"
                        >
                            https://nsb.dev/polygon-bounty.
                        </a>
                    </p>
                </div>
                <div className="w-full p-2 space-y-2 !z-50">
                    <div className="flex items-center">
                        <h1 className="pr-2 tracking-widest lg:text-2xl text-lg">
                            Filecoin
                        </h1>
                        <hr className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)] w-full" />
                    </div>
                    <p className="text-white/80 tracking-widest text-base">
                        Protocol Labs is an open-source R&D lab. They build
                        protocols, tools, and services to radically improve the
                        internet. Their products serve thousands of
                        organizations and millions of people.
                    </p>
                    <ul className=" list-disc">
                        <li className="text-white/80 tracking-widest text-base">
                            IPFS: IPFS powers the Distributed Web. It's a
                            peer-to-peer hypermedia protocol designed to
                            preserve and grow humanity's knowledge by making the
                            web upgradeable, resilient, and more open.
                        </li>
                        <li className="text-white/80 tracking-widest text-base">
                            Filecoin: An open-source cloud storage marketplace,
                            protocol, and cryptocurrency.
                        </li>{' '}
                        <p>Prizes up for grab:</p>
                        <li className="text-white/80 tracking-widest text-base">
                            ₹20000 for best use of IPFS and/or Filecoin
                        </li>
                    </ul>
                    <p className="text-white/80 text-base !z-50">
                        {' '}
                        Read about the bounty details and find code templates
                        for Filecoin here:
                        <a
                            href="https://nsb.dev/filecoin-bounty"
                            target="blank"
                            className="text-white/80 pl-2 text-lg underline cursor-pointer"
                        >
                            https://nsb.dev/filecoin-bounty.
                        </a>
                    </p>
                </div>
                <div className="w-full p-2 space-y-2 !z-50">
                    <div className="flex items-center">
                        <h1 className="pr-2 tracking-widest lg:text-2xl text-lg">
                            Solana
                        </h1>
                        <hr className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)] w-full" />
                    </div>
                    <p className="text-white/80 tracking-widest text-base">
                        Solana is the fastest blockchain in the world and the
                        fastest growing ecosystem in crypto, with thousands of
                        projects spanning DeFi, NFTs, Web3 and more.
                    </p>
                    <ul className=" list-disc">
                        <p>Prizes up for grab:</p>
                        <li className="text-white/80 tracking-widest text-base">
                            young gun - $USDC 100 for the best project beginners
                            just starting out on Solana and/or
                        </li>
                        <li className="text-white/80 tracking-widest text-base">
                            rising teknoking - $USDC 250 for the best project
                            that goes into depth, demonstrating higher-order
                            code and/or
                        </li>
                        <li className="text-white/80 tracking-widest text-base">
                            master glasseater - $USDC 500 for the best advanced
                            project that is almost ready for full-time
                            development.
                        </li>
                    </ul>
                    <p className="text-white/80 text-base !z-50">
                        {' '}
                        Read about the bounty details and find code templates
                        for Solana here:
                        <a
                            href="https://nsb.dev/solana-bounty"
                            target="blank"
                            className="text-white/80 pl-2 text-lg underline cursor-pointer"
                        >
                            https://nsb.dev/solana-bounty.
                        </a>
                    </p>
                </div>
                <div className="w-full p-2 space-y-2 !z-50">
                    <div className="flex items-center">
                        <h1 className="pr-2 tracking-widest lg:text-2xl text-lg">
                            Replit
                        </h1>
                        <hr className="border-b-8 border-b-white shadow-[0_0px_7.5px_0px_rgba(255,255,255,0.5)] w-full" />
                    </div>
                    <p className="text-white/80 tracking-widest text-base">
                        Replit is the best platform for quickly starting,
                        sharing, and developing projects in any programming
                        language, right from your browser.
                    </p>
                    <ul className=" list-disc">
                        <p>Prizes up for grab:</p>
                        <li className="text-white/80 tracking-widest text-base">
                            5,000 INR to winning project of the hackathon (must
                            be deployed on Replit)
                        </li>
                        <li className="text-white/80 tracking-widest text-base">
                            Replit schwags to 5 eligible submissions deployed on
                            Replit
                        </li>
                        <li className="text-white/80 tracking-widest text-base">
                            Eligibility to apply for internship/full-time roles
                            at Replit.
                        </li>
                    </ul>
                    <p className="text-white/80 text-base !z-50">
                        {' '}
                        Read about the bounty details and find code templates
                        for Replit here:
                        <a
                            href="https://nsb.dev/replit-bounty"
                            target="blank"
                            className="text-white/80 pl-2 text-lg underline cursor-pointer"
                        >
                            https://nsb.dev/replit-bounty.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tracks
