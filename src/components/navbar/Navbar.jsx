import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo1.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#home' >WebMafias</a></p>
  </>
)

//BEM => Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='web__navbar' >
      <div className='web__navbar-links' >
        <div className='web__navbar-links_logo' >
          <img className='logo-image' src={logo} alt='logo' />
        </div>
        <div className='web__navbar-links_container' >
          <Menu />
        </div>
      </div>
      <div className='web__navbar-sign' >
        <p>Join</p>
        <button type='button' >Log in</button>
      </div>
      <div className='web__navbar-menu' >
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='web__navbar-menu_container scale-up-center' >
            <div className='web__navbar-menu_container-links' >
              <Menu />
              <div className='web__navbar-menu_container-links-sign' >
                <p>Join</p>
                <button type='button' >Log in</button>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

export default Navbar;