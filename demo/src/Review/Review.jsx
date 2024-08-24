import React from 'react'
import '../App.css'


const Review = ({logoPic , tittle ,para}) => {
  return (
    <>
        <div style={{width:"21rem"}} className='p-2 bg-white feedback'>
        <div className='row p-2'> <div className='d-flex align-items-center '><img src={logoPic} alt="" style={{height:"2rem" , width:"2rem" ,borderRadius:"50%" ,backgroundColor:"red"}} /> <h5 className='mx-3'>{tittle}</h5></div></div>
        <div className='row'> <p >{para}</p></div>
       </div>
    
    
    </>
  )
}

export default Review