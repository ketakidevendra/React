import React from 'react'
import {
  Link,
  Route,
  BrowserRouter
} from 'react-router-dom'
function Topic(props)
{
  console.log({props})
   return(
     <div>
     <h3>{props.match.params.egal}</h3>
     <h3>{props.location.pathname}</h3>
     </div>
   )
}
export default function Topics({match})
{
  return (

    <div>
    <h2> Topics </h2>
    <ul>
        <li>
          <Link to= {`${match.url}/rendering`}> Rendering with React </Link>
        </li>
        <li>
          <Link to= {`${match.url}/components`}> Components </Link>
        </li>
        <li>
          <Link to='/Topics/Props'> Props Vs State </Link>
        </li>
    </ul>
    <hr/>
    <Route path = '/Topics/:egal' component= {Topic} />
    </div>

  )
}
