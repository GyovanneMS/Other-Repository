import { useState } from "react";



export function Counter() {

    const [hollo, setCounter] = useState(0);

    function increment(){
        setCounter(hollo + 1)
    }

    return (
        <div>
            <h2>{hollo}</h2>
            <button type="button" onClick={increment}>Increment haha</button>
        </div>
    )

}