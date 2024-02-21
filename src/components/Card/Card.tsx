import './Card.css'
import React from 'react'
import image from '../../assets/Rectangle 30thousand.png'
class Card extends React.Component {
    render() {
        return (
            <div className="rounded overflow-hidden w-[228px]">
                <div className='h-[228px]'>

                <img  src= {image} className='max-h-full max-w-full w-full h-full'  alt="Sunset in the mountains"/>
                </div>
                <div className="text-left mt-2">
                    <h2 className="font-bold text-gray-950 text-xl m-0 text-[1.1rem]">The Coldest Sunset</h2>
                    <p className="text-gray-700 text-base">
                    text
                    </p>
                </div>
            </div>
        )
    }
}

export default Card