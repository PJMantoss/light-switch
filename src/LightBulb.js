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
    return (
        <svg>
            <defs />
            <g></g>
        <svg/>
    )
}
