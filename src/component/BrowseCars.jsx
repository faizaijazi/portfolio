import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './BrowseCars.css'
import carplan from '../assets/carplan.jpg'
import two from '../assets/boywithgirl.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'

function BrowseCars() {
    return (
        <div className="carwithcontant">
        <Splide
            options={{
                rewind: true,
                gap: '1rem',
            }}
            aria-label="My Favorite Images"
        >
            <SplideSlide>
                <div className="main">
                <img src={carplan} alt="Image 1" className='image'/>
                <div className='sideContent'>
                    <h1 className='heading'>Find the perfect car <span className='blue'> to <br /> conquer the great outdoors </span></h1>
                    <p>Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.</p>
                    <button className='carbtn'>Browse cars</button>
                </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="main">
                <img src={two} alt="Image 1" className='image'/>
                <div className='sideContent'>
                    <h1 className='heading'>Find the perfect car <span className='blue'> to <br /> unwind for the weekend </span></h1>
                    <p>From daily drivers to spirited sports cars, ditch the <br /> grind with convenient nearby cars.</p>
                    <button className='carbtn'>Browse cars</button>
                </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="main">
                <img src={three} alt="Image 1" className='image'/>
                <div className='sideContent'>
                    <h1 className='heading'>Find the perfect car <span className='blue'> for <br /> scenic corners & curves </span></h1>
                    <p>Get your fill of high-performance thrills, with the <br /> richest selection of luxury and exotic vehicles <br /> anywhere.</p>
                    <button className='carbtn'>Browse cars</button>
                </div>
                </div>
            </SplideSlide>
            
            <SplideSlide>
                <div className="main">
                <img src={four} alt="Image 1" className='image'/>
                <div className='sideContent'>
                    <h1 className='heading'>Find the perfect car <span className='blue'> to try <br /> before you buy </span></h1>
                    <p>Make sure your future wheels work well with your <br /> lifestyle by taking your time in the driver’s seat.</p>
                    <button className='carbtn'>Browse cars</button>
                </div>
                </div>
            </SplideSlide>

            <SplideSlide>
                <div className="main">
                <img src={five} alt="Image 1" className='image'/>
                <div className='sideContent'>
                    <h1 className='heading'>Find the perfect car <span className='blue'> to make <br /> errand day easier </span></h1>
                    <p>Book a roomy truck or SUV to ease your errand day <br /> stress, or to motivate your moving day.</p>
                    <button className='carbtn'>Browse cars</button>
                </div>
                </div>
            </SplideSlide>
            
        </Splide>
            </div>
    );
}

export {BrowseCars}