'use client'

import { createContext, useState } from "react";

// should declare here the type of the things that i pass as props
type AppContextType = {
    setShowRequestForm : any,
    showRequestForm : any
}

export const AppContext = createContext<AppContextType | null>(null)

interface Props {
    [propName: string]: any;
}


const AppContextProvider = (props : Props) => {

    const [showRequestForm, setShowRequestForm] = useState(false);

    const contextValue = {
        setShowRequestForm,
        showRequestForm
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
    </AppContext.Provider>
    )
}

export default AppContextProvider