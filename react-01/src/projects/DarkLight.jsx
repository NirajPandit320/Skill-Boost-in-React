import {useState, useEffect} from "react";
import {createContext, useContext} from "react";

//step 1 : create context
export const ThemeContext=createContext();

// step 2 : create provider
export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("dark");
    
    const handleThemeToggle=()=>{
        setTheme((prevTheme)=>prevTheme==="dark"?"light":"dark");
    }
    return(
        <ThemeContext.Provider value={{theme,handleThemeToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}
//creating a component
export const DarkLight=()=>{
    
    const {theme,handleThemeToggle}=useContext(ThemeContext);
    
    useEffect(() => {
        document.body.className = `${theme}-theme`;
    }, [theme]);

    return(
        <>
            <h1 className="theme-title">Dark Light</h1>
            <p className="theme-subtitle">Toggle the theme below:</p>
            <button className="theme-btn" onClick={handleThemeToggle}>{theme==="dark"?"Switch to Light":"Switch to Dark"}</button>
        </>
    )
}