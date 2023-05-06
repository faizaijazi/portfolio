import React from "react";
import './Slider.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/s0kyblue';
import "@splidejs/react-splide/css/sea-green";
// import '@splidejs/react-splide/css/core';

import jeep from "../assets/jeep.jpg";
import tesla from "../assets/tesla.jpg";
import subara from "../assets/subara.jpg";
import Porsche from "../assets/car1.jpg";
import bmw from "../assets/bmw.jpg";
import MercedesBenz from "../assets/mercedes.jpg";
import toyota from "../assets/toyota.jpg";
import nissan from "../assets/nissan.jpg";
import lamborgini from "../assets/lamborgini.jpg";
import ford from "../assets/ford.jpg";

function Slider() {
  return (
    <>
      <div className="cardSlider">
        <h1 className="browser">Browse by make</h1>
        <Splide
          options={{
            perPage: 5,
            focus: 0,
            omitEnd: true,
          }}
        >

          <SplideSlide>
            <img src={jeep} alt="Image 1" />
            <h2 className="carName">Jeep</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={tesla} alt="Image 2" />
            <h2 className="carName">Tesla</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={subara} alt="Image 3" />
            <h2 className="carName">Subaru</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={Porsche} alt="Image 3" />
            <h2 className="carName">Porsche</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={bmw} alt="Image 3" />
            <h2 className="carName">BMW</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={MercedesBenz} alt="Image 3" />
            <h2 className="carName">Mercedes-Benz</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={toyota} alt="Image 3" />
            <h2 className="carName">Toyota</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={nissan} alt="Image 3" />
            <h2 className="carName">Nissan</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={lamborgini} alt="Image 3" />
            <h2 className="carName">Lamborgini</h2>
          </SplideSlide>


          <SplideSlide>
            <img src={ford} alt="Image 3" />
            <h2 className="carName">Ford</h2>
          </SplideSlide>

        </Splide>
      </div>
    </>
  );
}

export { Slider };
