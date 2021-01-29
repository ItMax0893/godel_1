import React, { useState } from 'react'

type InputProps = {
    placeholder: string,
    id: string,
    label: string,
    onChangeValue: (s:string) => void
}

const Input = ({placeholder, id, label, onChangeValue}:InputProps) => {
    const [valueInput, setValueInput] = useState('')
    const changeValueInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
    }
    const setText = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.value)
    }
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} placeholder={placeholder} onChange={(e)=>{changeValueInput(e); setText(e)}} value={valueInput}/>
        </div>
    )
}

export default Input