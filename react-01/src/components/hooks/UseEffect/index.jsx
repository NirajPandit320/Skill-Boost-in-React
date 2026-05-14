// import { useEffect,useState } from "react";
// import "./index.css";


// export const ReactUseEffect = () => {
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log("Count Value is:",count);
//     },[count]);
//     return (
//         <div>
//             <h1>Increament</h1>
//             <p>{count}</p>
//             <button onClick={()=>{setCount(count + 1)}}>Increment</button>

//         </div>
//     );
// }
import { useEffect,useState } from "react";
import "./index.css";


export const ReactUseEffect = () => {
    const [date, setDate] = useState(0);
    
    useEffect(()=>{

        setInterval(() => {
            const newDate=new Date();
            setDate(newDate.toLocaleTimeString());
            
        }, 1000);
        []});
        
        
    return (
        <div>
            <h1>Date</h1>
            <p>{date}</p>

        </div>
    );
}