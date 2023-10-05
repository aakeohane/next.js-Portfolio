import Navbar from "./navbar"

const Header = () => {

  return (
    <div style={{position: "sticky", top: 0, zIndex: 10}}>
      <Navbar/>
    </div>
  )
}

export default Header