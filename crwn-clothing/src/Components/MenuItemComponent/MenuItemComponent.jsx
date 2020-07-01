import React from 'react';
import './MenuItemStyles.scss'
const MenuItem = ({title, imageurl,size})=>(
    <div className={`${size} menu-item`}>
    <div 
    className = {`background-image`}
    style={{
        backgroundImage: `url(${imageurl})`
    }}
    />
        <div className= 'content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'> Shop Now </span>
        </div>
</div>
);

export default MenuItem;