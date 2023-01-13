import React from "react";

type InputProps = {
    text: string
    inputType: string
    labelText: string
}

export function Input({labelText, text, inputType}: InputProps) {
    return (
        <div>
            <label htmlFor={text}> {labelText} </label>
            <input
                style={
                    {
                        padding: "10px",
                        borderRadius: "30px",
                        background: "white",
                        border:"var(--primary) 2px solid"
                    }
                }
                type={inputType}/>
        </div>
)
}