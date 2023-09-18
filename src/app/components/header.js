import Navbar from "./navbar"

const Header = ({offset}) => {

  return (
    <div style={{position: "sticky", top: 0}}>
      <Navbar offset={offset}/>
    </div>
  )
}

export default Header