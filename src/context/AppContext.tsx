'use client'

import { createContext, useState } from "react";

// should declare here the type of the things that i pass as props
export type AppContextType = {
    setShowRequestForm : any,
    showRequestForm : boolean,
    isMobNavOpen: boolean,
    setIsMobNavOpen: any,
    menuOnClick: () => void,
    requestFormOnClick: () => void,
    logoOnClick: () => void,
  }

export const AppContext = createContext<AppContextType | null>(null)

interface Props {
    [propName: string]: any;
}


const AppContextProvider = (props : Props) => {

    const [showRequestForm, setShowRequestForm] = useState(false);

    const [isMobNavOpen, setIsMobNavOpen] = useState(false);

    const menuOnClick = () => {
        setIsMobNavOpen(!isMobNavOpen);
          setShowRequestForm(false);
    }

    const requestFormOnClick = () => {
        setShowRequestForm(!showRequestForm);
        setIsMobNavOpen(false);
    }

    const logoOnClick = () => {
        setIsMobNavOpen(false);
    }

    const contextValue = {
        setShowRequestForm,
        showRequestForm,
        isMobNavOpen,
        setIsMobNavOpen,
        menuOnClick,
        requestFormOnClick,
        logoOnClick
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
    </AppContext.Provider>
    )
}

export default AppContextProvider