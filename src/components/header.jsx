'use client'
import { useContext } from "react"
import Navbar from "./navbar"
import { ModalContext } from "@/app/context/provider"

const Header = () => {

  // const { isOpen } = useContext(ModalContext)


  return (
    <div style={{position: "fixed", top: 0, left: 0, right: 0}}>
      <Navbar />
    </div>
  )
}

export default Header