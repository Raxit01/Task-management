import React from 'react'
import './card.css'
import Button from '@mui/material/Button';
const Card = (props) => {
   
  return (
    <div className='card'>
      <h4>{props.title}</h4>
     {props.isCompleted === false ? <Button variant="contained" onClick={()=>props.completedHp(props.id)}>Complete</Button> : <></>} 
     <Button variant="contained" className='delete' onClick={()=>props.deleteHp(props.id)}>Delete</Button>
    </div>
  )
}

export default Card
