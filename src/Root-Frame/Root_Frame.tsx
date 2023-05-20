import React from 'react'
import { Outlet } from 'react-router-dom'

const Root_Frame = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Root_Frame