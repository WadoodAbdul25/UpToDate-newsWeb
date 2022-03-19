import React from 'react'
import Loading from './Loading.gif'
export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={Loading} alt="Loading" style={{maxWidth:"120px"}} />
    </div>
  )
}
