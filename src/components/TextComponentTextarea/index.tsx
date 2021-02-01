import React from 'react'
import style from './style.module.css'

type TextProps = {
    text: string,
    searchText: string
}

const Text = ({text, searchText}:TextProps) => {
    
    function addStyleFendedText(str:string, searchStr:string): string | any{ 
        if(searchStr.length > 0 && str.includes(searchStr)){
            let strArr = str.split(`${searchStr}`)
            let strWithSpan = strArr.map((el, i) => {
                if(i < strArr.length-1){
                    return <span key={i}><span>{el}</span><span className={style.search}>{searchStr}</span></span>
                }else{
                    return <span key={i}>{el}</span>
                }
            })
            return(
                <>{strWithSpan}</>
            )
        }
        return (<span>{str}</span>)
    }
    return(
        <>
            <div className={style.p}>{addStyleFendedText(text, searchText)}</div>
        </>
    )
};
export default Text