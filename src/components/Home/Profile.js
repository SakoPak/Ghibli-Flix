import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Banner1 from '../../Assets/Banner1.jpeg'
import './profileMain.css'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: null
    }
  }

  render () {
    return (
      <>
        <main>
          <div className='bg'></div>
          <div className='container py-4'>
            <div className='p-5 mb-4 bg-light rounded-3'>
              <div className='container-fluid bg-image py-5' src={Banner1}>
                <h1 className='display-5 fw-bold'>Welcome to Ghibli!</h1>
                <p className='col-md-8 fs-4'>Create a fun profile or look through your favorite films!
                </p>
                <Link to={'/films'}>
                  <button className='btn btn-primary btn-lg' type='button'>Discover Films
                  </button>
                </Link>
              </div>
            </div>

            <div className='row align-items-md-stretch'>
              <div className='col-md-6'>
                <div className='h-100 p-5 text-white bg-dark rounded-3'>
                  <h2>Create a Profile</h2>

                  <Link to={'/create-profile'} className='nav-link'>
                    <button
                      className='btn btn-outline-light'
                      type='button'
                      data-bs-toggle='modal'
                      data-bs-target='#modalCreate'>Create
                    </button>
                  </Link>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='h-100 p-5 bg-light border rounded-3'>
                  <h2>Your Ghibli Dashboard</h2>
                  <Link to={'/profile-dashboard'} className='nav-link'>
                    <button className='btn btn-outline-secondary' type='button'>Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <footer className='pt-3 mt-4 text-muted border-top'>&copy; 2022
            </footer>
          </div>
        </main>
      </>
    )
  }
}

export default withRouter(Profile)
