import React, { Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './header.css'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>
    Change Password
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>
    Sign Out
    </NavLink>
    <NavLink to='/films' className='nav-link'>
    All Films
    </NavLink>
    <NavLink to='/profile' className='nav-link'>
    Home
    </NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'></NavLink>
    <NavLink to='/sign-in' className='nav-link'></NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Ghibli Flix</NavLink>
  </Fragment>
)

const Header = ({ user }) => {
  return (
    <>
      <div className='container'>
        <Navbar
          bg='light'
          variant='dark'
          expand='md'
          className='d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto text-dark'>
              {user && (
                <span className='navbar-text mr-2'>Welcome, {user.username}
                </span>
              )}
              {alwaysOptions}
              {user ? authenticatedOptions : unauthenticatedOptions}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    </>
  )
}

export default Header
