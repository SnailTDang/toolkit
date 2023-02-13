import React from 'react'

export default function Googlemap(props) {
    const {link, border, height} = props
    return (
        <div className="row text-center h-full">
            <div id="content-map" className='h-full'>
                <iframe src={link} className='w-full h-full' style={{ border: `${border}px`, height: `${height}px` }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
