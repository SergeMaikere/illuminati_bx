"use client"

import { FaSun, FaMoon  } from "react-icons/fa";
import { useState } from 'react';

const ToggleTheme = ({ className }) => {

    const [theme, setTheme ] = useState(false) 
    const ball: any = <div className="w-4 h-4 bg-black rounded"></div>
    return (
        <div onClick={() => setTheme(!theme)} className="flex justify-between p-1 rounded bg-yellow-300 w-11">
            {theme ? ball : <FaSun/>}
            {theme ? <FaMoon/> : ball}
        </div>
    );
};

export default ToggleTheme;
