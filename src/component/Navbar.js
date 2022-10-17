import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {

    setOpenLinks(!openLinks);
    
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img src="./img/logo-navbar.png" alt='logo' />
        <div className='hiddenLinks'>
          <NavLink to='/' > Accueil </NavLink>
          <NavLink to='/menu' > Nos pizzas </NavLink>
          <NavLink to='/about' > A propos </NavLink>
          <NavLink to='/contact' > Contact </NavLink>
        </div>
      </div>
      <div className='rightSide'>
        <NavLink to='/' > Accueil </NavLink>
        <NavLink to='/menu' > Nos pizzas </NavLink>
        <NavLink to='/about' > A propos </NavLink>
        <NavLink to='/contact' > Contact </NavLink>
        <button className='button' onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;