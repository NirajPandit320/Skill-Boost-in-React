import { useState } from "react";


export const State=()=>{
    
    const [count,setCount]=useState(0);

    const handleIncrement=()=>{
        setCount(()=>count+1);
    }
    const handleDecrement=()=>{
        setCount(()=>count-1);
    }


    return(
        <>
        <div>
            <h1>count:{count}</h1>
            <button onClick={handleIncrement}>increament</button>
             <button onClick={handleDecrement}>Decreament</button>
        </div>
        </>

    )
}