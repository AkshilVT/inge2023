import React from 'react'
import Question from './Question'

function FAQ() {
    const [id, setId] = React.useState(0)
    return (
        <div className="max-w-screen-2xl flex flex-col justify-around items-center w-full px-10 relative space-y-10">
            <aside className="space-y-4 w-full text-right h-1/3 flex flex-col justify-center">
                <h2 className="font-itc-avant xl:text-xl text-base tracking-[.4em] text-[#788596] uppercase">
                    The Questions
                </h2>
                <h1 className="font-itc-serif uppercase tracking-widest xl:text-3xl text-xl">
                    FAQs
                </h1>
                <h3 className="font-aurebesh text-sm tracking-[1.33em] text-[#788596]">
                    Askaway
                </h3>
            </aside>
            <div className="w-full relative h-[1040px] md:h-[700px]">
                <div className="absolute space-y-4 z-10 w-full">
                    <Question
                        id={0}
                        open={id}
                        setOpen={setId}
                        que="What is Ingenious Hackathon? "
                        ans=" Ingenious Hackathon is an initiative by some nerdy noobs at
                    School of Engineering and Applied Science, Ahmedabad
                    University. We want you in the limelight, while we manage
                    the light and the technicalities. We want you to come and
                    build & code. We provide everything else (Not
                    transportation)."
                    />
                    <Question
                        id={1}
                        open={id}
                        setOpen={setId}
                        que="What's the mode of Hackathon?"
                        ans="The Ingenious Hackathon 4.0 is in Hybrid Mode. On the basis of registration of teams, few teams will be selected for offline (rest online) and they will receive mail separately."
                    />
                    <Question
                        id={2}
                        open={id}
                        setOpen={setId}
                        que="Who can participate?"
                        ans="The maximum age of the participant must be 25. He must not necessarily be a college student."
                    />
                    <Question
                        id={3}
                        open={id}
                        setOpen={setId}
                        que="What are the dates?"
                        ans="28th-29th January, 2023"
                    />
                    <Question
                        id={4}
                        open={id}
                        setOpen={setId}
                        que="What is the team size?"
                        ans="1-5 people. Lone-wolves are allowed."
                    />
                    <Question
                        id={5}
                        open={id}
                        setOpen={setId}
                        que="What should I bring?"
                        ans="A valid government issued photo ID and/or your college issued photo ID, laptop, phone, chargers and your favorite blanket. (We'll be providing mattresses)."
                    />
                    <Question
                        id={6}
                        open={id}
                        setOpen={setId}
                        que="What items are prohibited?"
                        ans="Drugs, Alcohol or any sort of weapons that can injure or are in any way harmful or
addictive. If you are unsure, please ask us."
                    />
                </div>
            </div>
        </div>
    )
}

export default FAQ
