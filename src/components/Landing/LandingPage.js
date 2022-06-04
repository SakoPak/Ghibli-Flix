
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './landing.css'
import totoroPortrait from '../../Assets/totoroPortrait.jpg'

class LandingPage extends Component {
  render () {
    return (
      <>
        <div className='whole-page'>
          <div className='container col-xxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
              <div className='col-10 col-sm-8 col-lg-6'>
                <img
                  src={totoroPortrait}
                  className='d-block mx-lg-auto img-fluid'
                  alt='Big Grey Totoro'
                  width='700'
                  height='500'
                  loading='lazy'></img>
              </div>
              <div className='col-lg-6'>
                <h1 className='display-5 fw-bold  lh-1 mb-3'>
                Welcome to Ghibli Flix
                </h1>
                <p className='lead'>The Magical World of Ghibli Films</p>
                <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                  <Link to={'/sign-up'} className='nav-link'>
                    <button
                      type='button'
                      className='btn btn-lg px-4 me-md-2 btn-outline-light'
                      data-bs-toggle='modal'
                      data-bs-target='#modalSignin'>
                    Get Started
                    </button>
                  </Link>

                  <Link to={'/sign-in'} className='nav-link'>
                    <button
                      type='button'
                      id='signinbtn'
                      className='btn btn-lg px-4 btn-outline-light'>
                    Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(LandingPage)
