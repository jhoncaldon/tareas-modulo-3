import React from "react"
export const details=(props)=>{
    console.log(props,'props image')
    return(
        <div>
            <img src={props.src} alt="imagen"/>
        </div>
    )
}