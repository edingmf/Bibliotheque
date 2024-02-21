import './BookCardDetail.css'
import image from '../../assets/Rectangle 30thousand.png'
import React from 'react'


class BookCardDetail extends React.Component {
    render() {
        return (
            <div className="w-[964px] h-[447px]">
                <div className='w-[964px] h-[308px] flex justify-between sticky left-[367px] top-[235px]'>  
                    <img src={image} className="w-[375px] h-[308px] rounded-3xl" alt="" />
                    <div className="w-[509px]  sticky left-[829px]">
                        <p className="font-bree text-[32px] font-normal leading-[43px] tracking-normal text-left text-[#1B1B1B] w-[126px] h-[43px] m-0">synopsis</p>
                        <div className="w-[509px] h-[204px]">
                            <p className="font-abhaya text-base font-normal leading-[19px] tracking-normal text-left text-black">
                                Pas de jolis vers traditionnels. Quelques mots, pensées, souvenirs réunis en ce recueil qui s’espère empreint d’un peu de poésie. Il y a la grande ville, la violence, la solitude, parfois un peu de tendresse et souvent, la nostalgie.
                            </p>
                            <p className="w-[57px] h-[43px] text-[32px] font-normal leading-[43px] tracking-normal text-left sticky top-[421px];">
                                78k
                            </p>
                        </div>
                        <div className="botton flex">
                            <a href="#" className="font-abhaya w-48 h-12 font-sans text-lg font-bold leading-6 text-blue-500 border-2 border-blue-500 rounded-3xl text-center text-decoration-none flex items-center justify-center">Lire</a>
                            <a href="#" className="font-inter w-48 h-12 font-inter text-base font-bold leading-5 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl text-center text-decoration-none flex items-center justify-center ml-4">Demander</a>
                        </div>
                    </div>  
                </div>
            </div>

        )
    }
}

export default BookCardDetail