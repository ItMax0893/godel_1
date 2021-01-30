import React from 'react'

type InputProps = {
    placeholder: string,
    id: string,
    label: string,
    value:string,
    onChangeValue: (s:string) => void
}

const Input = ({placeholder, id, label, onChangeValue, value}:InputProps) => {
    const changeValueInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.value)
    }

    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} placeholder={placeholder} onChange={changeValueInput} value={value}/>
        </div>
    )
}

export default Input