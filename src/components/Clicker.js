import React, {useState} from 'react';

function Clicker() {
    var [count, setCount] = useState(0);

    var clickHandler = () => setCount(count+1); //Compteur

    if (count === 10){
        return (
            <div>
                <button disabled> You can't click me anymore! </button>
                <p>You clicked {count} times.</p>
            </div>
        )
    } else {
        return (
            <div>
                <button type="button" onClick={clickHandler}>
                    Click me!
                </button>
                <p> You have clicked {count} times. </p>
            </div> 
        )
    }
}

export default Clicker;