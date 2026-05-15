import {useMemo, useState} from "react";

const ExpensiveComponent=()=>{
    const sum=()=>{
        console.log ("Calculating sum...");

        let i=0;
        for (i=0;i<1000000000;i++){
            i=i+1;
        }
        return i;
    }
    
    const total =useMemo(()=>{
        return sum();
    },[]);
    return <p>Total: {total}</p>;
}
const MemoParentComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <ExpensiveComponent />
        <button onClick={()=>setCount(count+1)}>Increment Count: {count}</button>
        <p>Parent Component Re-render: {count}</p>
        </>
    );
}
export default MemoParentComponent;