import {memo, useRef} from "react";
const Count = () => {
    const renderCount = useRef(0);
    return (
        <div>
            <h2>Count Component</h2>
            <h1>Component render this times {renderCount.current++} time(s)</h1>
        </div>
    );
}
export default memo(Count);