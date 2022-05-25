
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class LandingPage extends Component {
  render () {
    return (
      <>
        <div className='container col-xxl-8 px-4 py-5'>
          <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <img
                src='../public/carousel/Banner7.jpg'
                className='d-block mx-lg-auto img-fluid'
                alt='Totoro lying in the grass'
                width='700'
                height='500'
                loading='lazy'
              />
            </div>
            <div className='col-lg-6'>
              <h1 className='display-5 fw-bold lh-1 mb-3'>Welcome to Ghibli Flix
              </h1>
              <p className='lead'>The Magical World of Ghibli.</p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <Link to={'/sign-up'} className='nav-link'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg px-4 me-md-2' data-bs-toggle="modal" data-bs-target="#modalSignin">Get Started
                  </button>
                </Link>

                <Link to={'/sign-in'} className='nav-link'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary btn-lg px-4'>Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(LandingPage)
