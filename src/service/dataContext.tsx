// context/ContextDataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react"

interface ContextType {
    values: { [key: string]: any } // Dynamic key-value pairs
    setValue: (key: string, value: any) => void // Function to set a dynamic value
}

const ContextDataContext = createContext<ContextType | undefined>(undefined)

export const ContextDataProvider = ({ children }: { children: ReactNode }) => {
    const [values, setValues] = useState<{ [key: string]: any }>({})

    const setValue = (key: string, value: any) => {
        setValues(prevValues => ({ ...prevValues, [key]: value }))
    }

    return (
        <ContextDataContext.Provider value={{ values, setValue }}>
            {children}
        </ContextDataContext.Provider>
    )
}

export const useContextData = () => {
    const context = useContext(ContextDataContext)
    if (context === undefined) {
        throw new Error(
            "useContextData must be used within a ContextDataProvider"
        )
    }
    return context
}
