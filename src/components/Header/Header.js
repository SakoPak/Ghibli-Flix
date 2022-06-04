import React, { Fragment } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './header.css'
import smGrey from '../../Assets/Totoro Icons/smGrey.png'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/profile' className='nav-link'>
      <Button className='btn btn-outline-light'>Home</Button>
    </NavLink>
    <NavLink to='/change-password' className='password nav-link'>
      <Button className='btn btn-outline-light'>Change Password</Button>
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>
      <Button className='btn btn-outline-light'>Sign Out</Button>
    </NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'></NavLink>
    <NavLink to='/sign-in' className='nav-link'></NavLink>
    <NavLink to='/' className='nav-link'>
      <strong>Ghibli Flix</strong>
      <img src={smGrey} />
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg text-dark'>
        <div className='container-fluid'>
          <Navbar
            bg='light'
            variant='dark'
            expand='md'
            className='d-flex mb-2 mb-lg-0 fixed-top text-dark text-decoration-none navbar-expand-lg navbar-dark'>
            <Navbar.Toggle
              className='navbar-toggler'
              type='button'
              data-bs-target='basic-navbar-nav'
              aria-controls='basic-navbar-nav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto text-dark'>
                {user ? authenticatedOptions : unauthenticatedOptions}
                {user && (
                  <span className='navbar-text mr-2 '>
                  Welcome, {user.username}
                  </span>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </nav>
    </>
  )
}

export default Header
