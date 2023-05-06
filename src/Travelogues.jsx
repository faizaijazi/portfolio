import React from "react";
import Sea from "./assets/sea.webp"


function Travelogues(){
    return(
        <>
        <img src={Sea} alt="" />
        <div>
            <h3>FEATURED TRAVELOGUE</h3>
            <br />
            <h1>An Olympic experience <br /> in Washington</h1>
            <br />
            <p>Discover the epic waterfalls, moody <br /> weather, and lush forests of coastal <br /> Washington.</p>
            <br />
            <p>Read more</p>
        </div>
        </>
    )
}

export {Travelogues}