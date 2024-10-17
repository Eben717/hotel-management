'use client';

import { use, useEffect, useState } from "react";

import themeContext from "@/context/themeContext";

const ThemeProvider = () => {
    const themeFromStorage: boolean = 
    typeof localStorage != 'undefined' && localStorage.getItem("hotel-theme") 
    ? JSON.parse(localStorage.getItem("hotel-theme")!)
    : false;

    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);

    <themeContext.Provider value={{darkTheme, setDarkTheme}}>
        <div className={``}></div>
    </themeContext.Provider>
}