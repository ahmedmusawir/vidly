import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-primary mb-5'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/movies'>
          Vidly
        </NavLink>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/movies'>
                Movies
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/form-ref'>
                Form Ref
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/form-basic'>
                Form Basic
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/form-joi'>
                Form Joi
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
