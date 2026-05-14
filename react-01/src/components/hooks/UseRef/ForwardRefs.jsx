import { useRef, useId, forwardRef } from "react";

export const ForwardRefs = () => {

    const username=useRef(null);
    const password=useRef(null);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <BeforeReact19Input label="Username" ref={username} />
                <BeforeReact19Input label="Password" ref={password} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

const BeforeReact19Input = forwardRef((props, ref) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input id={id} type="text" ref={ref} />
        </div>
    );
});