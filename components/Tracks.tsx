import React from 'react'
import Track from './Track'

function Tracks() {
    return (
        <div className="max-w-screen-2xl w-full px-10 py-10">
            <aside className="space-y-4 text-right flex flex-col justify-center">
                <h2 className="font-itc-avant text-xl tracking-[.4em] text-[#788596] uppercase">
                    Fear is the path to Dark side
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest text-3xl">
                    The Tracks
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Choose your own
                </h3>
            </aside>
            <div className="w-full grid grid-cols-3 gap-5 my-8">
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
                    desc="Build Something That Makes Us Safer. This
Can Range From Saving Humanity From
Aliens To Saving Yourself From Your Neighbour's
Kid (Who Has Newly Learnt Pen- Testing) To
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
        </div>
    )
}

export default Tracks
