import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";


export function ThemeSwitcher(){
    const {theme,toggleTheme}=useContext(ThemeContext)

    return (
        <div>
            <button onClick={toggleTheme}>toggle Theme</button>
            <p>Current theme :{theme}</p>
        </div>
    )
}