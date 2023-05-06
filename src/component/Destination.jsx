import React from "react";
import './Destination.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/s0kyblue';
import "@splidejs/react-splide/css/sea-green";
// import '@splidejs/react-splide/css/core';

import a from "../assets/destination/1a.png";
import b from "../assets/destination/2a.png";
import c from "../assets/destination/3a.png";
import d from "../assets/destination/4a.png";
import e from "../assets/destination/5a.png";
import f from "../assets/destination/6a.png";
import g from "../assets/destination/7a.png";
import h from "../assets/destination/8a.png";
import i from "../assets/destination/9a.png";
import j from "../assets/destination/10a.png";
import k from "../assets/destination/11a.png";
import l from "../assets/destination/12a.png";
import m from "../assets/destination/13a.png";
import n from "../assets/destination/14a.png";
import o from "../assets/destination/15a.png";
import p from "../assets/destination/16a.png";
import q from "../assets/destination/17a.png";
import r from "../assets/destination/18a.png";

function Destination() {
  return (
    <>
      <div className="cardSliders">
        <h1 className="browser">Browse by destination</h1>
        <Splide
          options={{
            perPage: 6,
            focus: 0,
            omitEnd: true,
          }}
        >

          <SplideSlide>
            <div className="destinations">
            <img src={a} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Los Angeles</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={b} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Miami</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={c} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Honolulu</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={d} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Denver</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={e} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">London</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={f} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Toronto</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={g} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Jersey City</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={h} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">San Francisco</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={i} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Atlanta</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={j} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Phoenix</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={k} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Oriando</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={l} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Las Vegas</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={m} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Dallas</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={n} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Washington Dc</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={o} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Chicago</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={p} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Houston</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={q} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">San Diego</h2>
            </div>
          </SplideSlide>


          <SplideSlide>
            <div className="destinations">
            <img src={r} alt="Image 1" className="pngIcons" />
            <h2 className="iconName">Boston</h2>
            </div>
          </SplideSlide>



        </Splide>
      </div>
    </>
  );
}

export { Destination };
