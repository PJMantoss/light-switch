import React, { useState } from "react";
import "./styles.css";

export default function LightBulb() {
    let [light, setLight] = useState(0);

    const setOn = () => setLight(0);
    const setOff = () => setLight(1);

    let fillColor = light === 1 ? "#ffbb73" : "#000000";

    return (
        <div>
            <div>
                <LightBulbSvg fillColor={fillColor} />
            </div>

            <button onClick={setOff}>Off</button>
            <button onClick={setOn}>On</button>
            
        </div>
    )
}

function LightBulbSvg(props){
    return ( // SVG markup for shape of a light bulb
        <svg width="56px" height="90px" viewBox="0 0 56 90" version="1.1">
            <defs />
            <g 
                id="Page-1" 
                stroke="none" 
                stroke-width="1" 
                fill="none" 
                fill-rule="evenodd"
            >
                <g id="noun_bulb_1912567" fill="#000000" fill-rule="nonzero">
                    <path
                        d="M38.985,68.873 L17.015,68.873 C15.615,68.873 14.48,70.009 14.48,71.409 C14.48,72.809 15.615,73.944 17.015,73.944 L38.986,73.944 C40.386,73.944 41.521,72.809 41.521,71.409 C41.521,70.009 40.386,68.873 38.985,68.873 Z"
                        id="Shape" 
                    />
                    <path 
                        d="" 
                        id="Shape" 
                    />
                    <path 
                        d="" 
                        id="Shape" 
                    />
                    <path 
                        d="" 
                        id="Shape"
                    />
                </g>
            </g>
        </svg>
    )
}
