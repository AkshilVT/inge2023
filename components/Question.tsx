import React from 'react'

function Question({ id, open, setOpen, que, ans }: any) {
    return (
        <div
            className={
                `flex space-x-4 font-itc-avant` +
                (id === open ? null : ` hover:bg-white/10`)
            }
            onClick={() => setOpen(id)}
        >
            <div className="w-full border-2 space-y-3 border-[#788596] p-4">
                <h1 className="text-xl">{que}</h1>
                {id == open ? (
                    <p className="text-[#788596] text-lg">{ans}</p>
                ) : null}
            </div>
            <div
                className={
                    `border-r-8 ` +
                    (id == open
                        ? ` shadow-[0_0px_7.5px_0px_rgba(255,255,255,5)]`
                        : null)
                }
            />
        </div>
    )
}

export default Question
