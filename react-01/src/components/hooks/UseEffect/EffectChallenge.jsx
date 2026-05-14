import { use, useEffect,useState } from "react";
import "./index.css";


export const EffectChallenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    
    useEffect(()=>{
        console.log("User name is :",name);
    },[name]);

    useEffect(()=>{
        document.title = `Count: ${count}`; 
    },[count]);
    return (
        <div>
            <h1>Increament</h1>
            <p>{count}</p>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>

        </div>
    );
}