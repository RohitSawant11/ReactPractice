import { useState } from "react";
import "./Theme.css";

function Theme() {
    const [darkTheme, setDarkTheme] = useState(false);

    const setDarkThemeHandler = () => {
        setDarkTheme(!darkTheme);
    }

    return(
        <>
            <div className="wrapper" style={{ background : `${ darkTheme === true ? "black" : "white" }`}}>
                <h1 className="heading-txt">Theme {darkTheme}</h1>
                <button onClick={setDarkThemeHandler}>Toggle Theme</button>
            </div>
        </>
        
    )    
}
export default Theme;