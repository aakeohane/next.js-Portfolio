'use client'
import Navbar from "./navbar"

const Header = () => {


  return (
    <div style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 50}}>
      <Navbar />
    </div>
  )
}

export default Header