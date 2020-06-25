import React from 'react'
import './Searchbox.css'

export const Searchbox = ((props)=>
{return(
    <input type='search' 
        className = 'search'
        placeholder={props.placeholder} 
        onChange={props.handlechange}
    />
    )
})
