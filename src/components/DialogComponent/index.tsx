// components/Dialog.tsx  For development purpose later will remove this file
import React from "react"

interface DialogComponentProp {
    isOpen: boolean
    onClose: () => void
    // title: string
    children: React.ReactNode
}

const DialogComponent = ({
    isOpen,
    onClose,
    // title,
    children,
}: DialogComponentProp) => {
    if (!isOpen) return null // If the dialog is not open, return null.

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white-50 border rounded-lg p-20 w-[400px]">
                {/* <header className="flex items-center justify-between">
                    <button onClick={onClose}>X</button>
                </header> */}
                <div className="dialog-content">{children}</div>
            </div>
        </div>
    )
}

export default DialogComponent
