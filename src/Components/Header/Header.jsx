import React from "react";
import './Header.css'

import { Context } from '../../Context/Theme'
import { NavLink } from 'react-router-dom'

function Header () {
    
    const { theme, setTheme } = React.useContext(Context)
    return (
        <>               
        
        
     <header className={theme == 'light' ? 'light' : 'dark'}>
      <nav>
        <li>
        <NavLink className={({isActive}) => "nav__link" + (isActive ? 'nav__link--active' : "")} to="/">Home</NavLink>
        </li>
        
        <li>
        <NavLink className={({isActive})  => "nav__link" + (isActive ? 'nav__link--active' : "")} to="/About">About</NavLink>
        </li>
        
        <li>
        <NavLink className={({isActive})  => "nav__link" + (isActive ? 'nav__link--active' : "")} to="/Profile">Profile</NavLink>
        </li>
        
        <select value={theme} onChange={(evt) => setTheme(evt.target.value)}>
        <option value="light">Kun</option>
        <option value="dark">Tun</option>
        </select>
        
       </nav>
      </header>
        
       
        
        
        
        
       
        </>
        )
    }
    
    
    
    
    export default Header