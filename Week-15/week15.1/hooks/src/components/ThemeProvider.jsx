import React, { createContext, useState } from "react";

export const ThemeContext=createContext()
export function ThemeProvider({children}){

const [theme,setTheme]=useState('light')

const themeToggle=()=>{
    setTheme((prevTheme)=>(prevTheme =='light'?'dark':'light'))
}

return (
    <ThemeContext.Provider value={{theme,themeToggle}}>
       {children}
    </ThemeContext.Provider>
)

}