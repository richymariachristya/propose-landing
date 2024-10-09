// components/Dialog.tsx  For development purpose later will remove this file
import React from "react"

interface DialogProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
}

const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    title,
    children,
}) => {
    if (!isOpen) return null // If the dialog is not open, return null.

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <header>
                    <h2>{title}</h2>
                    <button onClick={onClose}>X</button>
                </header>
                <div className="dialog-content">{children}</div>
            </div>
            <style jsx>{`
                .dialog-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .dialog {
                    background: white;
                    border-radius: 5px;
                    padding: 20px;
                    width: 400px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default Dialog
