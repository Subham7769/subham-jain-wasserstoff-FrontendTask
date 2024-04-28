import React from 'react'
import './EventView.css'
import Slider from '../Slider/Slider'
import logo from '../../Assets/Logo.png'
import Branding from '../../Assets/Astrix Branding.png'
import SwitchComponent from '../SwitchComponent/SwitchComponent'
import location from '../../Assets/location_on.png';
import alarm from '../../Assets/alarm.png';
import back1 from '../../Assets/back1.png';
import back2 from '../../Assets/back2.png';
import backc from '../../Assets/backc.png';
import qr from '../../Assets/qr.png';
import { Button } from '@mui/material'


const EventView = () => {
    return (
        <div className='EventView'>
            <div className='sliderView'>
                <div className='logoContainer'>
                    <img src={Branding} alt="" />
                    <img src={logo} alt="" />
                </div>
                <Slider />
                <div className='ButtonContainer'>
                    <SwitchComponent />
                </div>
            </div>
            <div className='DetailView'>
                <h3>Explore Your first<br />event</h3>
                <div className='timeNvanue'>
                    <h1>Event Name</h1>
                    <div className='eventDetails'>
                        <div className='location'><img src={location} alt="" /></div>
                        <span>Venue</span>
                        <div className='location'><img src={alarm} alt="" /></div>
                        <span>04/3/2024 @19:00</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
                    </p>
                </div>
                <div className='ArtistView'>
                    <h3>Artist Lineup</h3>
                    <div className="ArtistSlide">
                        <div><img src={back1} alt="Image 1" /></div>
                        <div className="centered"><img src={backc} alt="Image 2" /></div>
                        <div><img src={back2} alt="Image 3" /></div>
                    </div>
                </div>
                <div className='detailFooter'>
                    <img src={qr} alt="" />
                    <Button variant="contained" style={{ borderRadius: 30, backgroundColor: 'gold', color: 'black', height: "2rem" }}>Join Waitlist</Button>
                </div>
            </div>
        </div>
    )
}

export default EventView