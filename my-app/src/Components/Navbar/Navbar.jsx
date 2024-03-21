import React from 'react'
import "./../Navbar/Navbar.css";
//import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className='navbar-Wrapper'>
        <div className='title'>Rich Man TexTiles</div>
        <div className='navbar-btn-Wrapper'>
            <button>Cart</button>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar