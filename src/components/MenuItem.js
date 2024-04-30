import React from 'react'
import AddButton from './AddButton'

const MenuItem = ({image, name, price}) => {
  return (
    <>
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1> {name} </h1>
        <p> &#x20b9;{price} </p>
        <AddButton name={name}/>
    </div>
    </>
  )
}

export default MenuItem