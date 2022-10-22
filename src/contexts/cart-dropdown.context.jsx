import { createContext, useState } from "react";

// the actual value i want to access
export const DropdownContext = createContext({
currentDropdown: false,
setCurrentDropdown: () => false,
});

export const DropdownProvider = ({children}) => {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const value = {currentDropdown,setCurrentDropdown}



    return <DropdownContext.Provider value={value} > {children} </DropdownContext.Provider>
}