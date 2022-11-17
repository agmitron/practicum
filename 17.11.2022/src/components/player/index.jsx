import React from 'react'
import './styles.css'

const Player = ({ status, name, imageWait, imageActive, action }) => {
  console.log(`${name} was changed`)
  return <div className='player'>
    <img src={status ==='wait' ? imageWait : imageActive} alt={name} className='player__image' />
    <h2 className='player__name'>{name}</h2>
    {action && <button className='player__action' onClick={action}>Change</button>}
  </div>
}

export default Player