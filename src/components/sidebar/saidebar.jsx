import React from 'react'
import menuBar from "../../assets/svg/menu-bar.svg";
const Sidebar = () => {
  return (
    <div className=' bg-red-500 w-[200px] h-screen fixed top-0 left-0'>
      <div>
        <img src={menuBar} alt="img" />
      </div>
    </div>
  )
}

export default Sidebar