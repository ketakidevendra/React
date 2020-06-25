import React from 'react'
import './CardComponent.css'

export const Card = ((cardDetails)=>
{return(
    <div className='card-container'>
    <img alt = {'Monster: '+cardDetails.monster.name} src={`https://robohash.org/${cardDetails.monster.id}?set=set&size=180`}/>
    <h1>{cardDetails.monster.name}</h1>    
    </div>
    )
})
