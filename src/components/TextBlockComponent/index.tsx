import React, { useState } from 'react';
import Input from '../Input/index';
import style from './style.module.css'
import Text from '../TextComponent/index';

const TextBlock:React.FC = () => {
    const [text, setText] = useState('')
    const [searchText, setSearchText] = useState('')
    return(
        <div>
            <div className={style.inputBlock}>
                <Input  label="set Text" 
                        placeholder="set Text" 
                        id="text" 
                        onChangeValue={setText} 
                        value={text}/>
                <Input  label="search Text" 
                        placeholder="search Text"  
                        id="search" 
                        onChangeValue={setSearchText} 
                        value={searchText}/>
            </div>
            <p>Search Text: {searchText}</p>
            <Text text={text} searchText={searchText}/>
        </div>
    );
}

export default TextBlock;
