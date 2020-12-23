import React from 'react';
import './Dice.css'

function Dice(props) {

    const imgPath = "dices/" + props.color + props.face + ".png"

    return (
        <img className="img-dice-rotate" src={imgPath} alt=""/>
    );
}


export default Dice;