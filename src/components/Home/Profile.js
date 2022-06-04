import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
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
          <div className='bg'>
            <div className='container py-4'>
              <div className='banner p-5 mb-4 bg-light rounded-3'>
                <div className='container-fluid py-5'>
                  <h1 className='display-5 fw-bold'>Welcome to Ghibli!</h1>
                  <p className='col-md-8 fs-4'>
                  Create a profile or look through your favorite Ghibli films!
                  </p>
                  <Link to={'/films'}>
                    <button className='btn btn-primary btn-lg' type='button'>
                    Discover Films
                    </button>
                  </Link>
                </div>
              </div>
              <div className='row align-items-md-stretch'>
                <div className='col-md-6'>
                  <div className='h-100 p-5 text-dark rounded-3'>
                    <h2>Create a Profile</h2>

                    <Link to={'/create-profile'} className='nav-link'>
                      <button
                        className='btn btn-outline-light'
                        type='button'
                        data-bs-toggle='modal'
                        data-bs-target='#modalCreate'>
                      Create
                      </button>
                    </Link>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='h-100 p-5 bg-light border rounded-3'>
                    <h2>About Studio Ghibli</h2>
                    <p>
                    Studio Ghibli is an iconic Japanese animation studio
                    founded in 1985 by film directors Isao Takahata and Hayao
                    Miyazaki. The studio has produced some of Japan`s most
                    beloved films and has grown in international acclaim since
                    its inception.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default withRouter(Profile)
