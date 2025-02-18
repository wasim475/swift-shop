import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className={` 
        min-h-[calc(100vh-116px)]
        mt-48
        flex
        justify-center 
        items-center `}
  >
      <ScaleLoader size={100} color='#F92FD3'/>
    </div>
  )
}

export default Spinner
