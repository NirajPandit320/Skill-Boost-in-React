import {createContext, useContext} from "react";
 
// step -1 :Create Context
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext=createContext();

//Step -2: Create Provider
export const BioProvider=({children})=>{
    const myName="Niraj";
    const myAge=24;
    return(
        <BioContext.Provider value={{myName,myAge}}>
            {children}
        </BioContext.Provider>
    );
};

// Step -3: Create Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useBioContext = () => useContext(BioContext);
