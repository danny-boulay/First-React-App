import React, {useState} from 'react';

function Button() {
    var [count, setCount] = useState(0);

    var clickHandler = () => setCount(count+1);
    if (count === 10){
        return (
            <div className="clickGame">
                <button disabled> You can't click me anymore! </button>
                <p>You clicked {count} times.</p>
            </div>
        )
    } else {
        return (
            <div className="clickGame">
                <button onClick={clickHandler}>
                    Click me!
                </button>
                <p> You have clicked {count} times. </p>
            </div> 
        )
    }
}

export default Button;