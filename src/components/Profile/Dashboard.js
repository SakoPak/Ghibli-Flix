import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import IndexProfiles from './IndexProfiles'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      first: '',
      last: '',
      color: ''
    }
  }

  render () {
    const { match } = this.props
    return (
      <>
        <div className='container col-xxl-8 px-4 py-5'>
          <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'></div>
            <div className='col-lg-6'>
              <h1 className='display-5 fw-bold lh-1 mb-3'>Hello {this.state.username}!
              </h1>
              <p className='lead'>Your Ghibli Dashboard</p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <Link to={'/profiles'} className='nav-link'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg px-4 me-md-2'>View Profiles
                  </button>
                </Link>

                <Link to={`/profile/${match.params.id}`} className='nav-link'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg px-4 me-md-2'>Show Profile
                  </button>
                </Link>

                <Link to={'/films'} className='nav-link'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary btn-lg px-4'>View Films
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

export default withRouter(Dashboard)
