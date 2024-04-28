import React from 'react'
import './FrontView.css'
import logo from '../../Assets/Astrix Logo.png'
import tile1 from '../../Assets/tile1.png'
import tile2 from '../../Assets/tile2.png'
import tile3 from '../../Assets/tile3.png'
import tile4 from '../../Assets/tile4.png'
import tile5 from '../../Assets/tile5.png'
import tile6 from '../../Assets/tile6.png'
import tile7 from '../../Assets/tile7.png'
import tile8 from '../../Assets/tile8.png'


const Fronteview = () => {
    return (
        <div className='Fronteview'>
            <div className='logoContainer'>
                <img src={logo} alt="" />
            </div>
            <div className='Frontline'>
                <span>
                    we
                    <img src={tile1} alt="" />
                    ORGANIZE THE CONNECTION
                    <img src={tile2} alt="" /><br/>
                    <img src={tile3} alt="" />
                    BETWEEN
                    <img src={tile4} alt="" />
                    MUSIC <br/>ARTIST
                    <img src={tile5} alt="" />
                    CULTURE
                    <img src={tile6} alt="" /><br/>
                    <img src={tile7} alt="" />
                    ART
                    <img src={tile8} alt="" />
                    & COLLECTIONS
                </span>
            </div>
        </div>
    )
}

export default Fronteview