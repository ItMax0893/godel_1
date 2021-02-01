import React, { useState } from 'react'
import Input from '../Input'
import style from './style.module.css'
import Text from '../TextComponentTextarea'

const Textarea = () => {
    const [textValue, setTextValue] = useState('')
    const [textValueIn, setTextValueIn] = useState('')
    const addTextInText = (e) => {
        setTextValue(e.target.value)
        
    }

    return(
        <div className={style.wrapper}>
                <Text text={textValue} searchText={textValueIn}/>
                <textarea className={style.textarea} name="" id=""  value={textValue} onChange={addTextInText} ></textarea> 
            <Input placeholder='search' id='id' label='search' onChangeValue={setTextValueIn} value={textValueIn}/>
        </div>
    )
}
export default Textarea