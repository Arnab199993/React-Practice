import React from 'react'
import { useState } from 'react'
import Lifecycleclass from './Lifecycleclass'
const Lifecycle = () => {
  const [state,setstate]=useState(true)
  const showunmount=()=>{
    setstate(!state)
  }
  return (
    <div>
      <h1>Lifecycle</h1>
      <button onClick={showunmount}>
        Hide Component
      </button>
      {
        state?<Lifecycleclass/>:""
      }
    </div>
  )
}

export default Lifecycle