import React from "react"
export const title=(props)=>{
    console.log(props,'props image')
    return(
        <div>
            <img src={props.src} alt="imagen"/>
        </div>
    )
}