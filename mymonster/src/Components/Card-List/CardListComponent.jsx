import React from 'react'
import './CardList.css' 
import { Card } from '../Card/CardComponent'

export const CardList = (props)=>
{
   // return(<div className='card-list' >{props.children}</div>)
    return ( 
        <div className='card-list' >  
        {
            props.monsterList.map((monster)=> (
        
               <Card key={monster.key} monster = {monster} />
                
              )
              )
        }
    
      </div>
      )
    
}