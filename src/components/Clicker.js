import cookie from "../assets/cookie.png"
import React, {useState} from 'react';

function Clicker() {
    var [count, setCount] = useState(0);

    var clickHandler = () => setCount(count+1); //Compteur

    if (count === 10){
        return (
            <div>
                <img 
                    src={cookie}
                    id="disabled-cookie"
                    alt="An image of a chocolate chip cookie in gray color"
                />
                <p>You clicked {count} times.</p>
            </div>
        )
    } else {
        return (
            <div>
                <img 
                    src={cookie}
                    id="cookie"
                    alt="An image of a chocolate chip cookie"
                    onClick={clickHandler}
                />
                <p> You have clicked {count} times. </p>
            </div> 
        )
    }
}

export default Clicker;