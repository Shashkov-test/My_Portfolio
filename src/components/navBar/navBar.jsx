import React, { useState } from 'react'
import './navBar.scss';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { data } from './navBarData';

const NavBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

  return (
    <div>
        <nav className='navbar'>
            <div className="navbar__container">
                <Link to={'/'} className='navbar__container__logo'>
                    <FaReact size={30} /> 
                </Link>
            </div>

            <ul 
             className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                {
                    data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link onClick={handleToggleIcon} className='navbar__container__menu__links' to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className="nav__icon" onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                }
            </div>
        </nav>
    </div>
  )
}

export default NavBar;