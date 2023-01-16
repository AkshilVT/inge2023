import React from 'react'
import ReactMarkdown from 'react-markdown'

function STrack({ title, desc }) {
    return (
        <div className="w-full">
            <h1 className="text-xl">{title}</h1>
            <div className="">
                <ReactMarkdown>{desc}</ReactMarkdown>
            </div>
        </div>
    )
}

export default STrack
