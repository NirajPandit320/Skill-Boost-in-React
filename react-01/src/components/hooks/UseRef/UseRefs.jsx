import { useRef } from 'react';
export const UseRefs = () => {
    const inputRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Username: ", inputRef.current.value);
        console.log("Password: ", passwordRef.current.value);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={inputRef} />
            <input type="password" id="password" ref={passwordRef} />
            <button>Submit</button>
        </form>
    )}