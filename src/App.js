/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import LandingPage from './components/Landing/LandingPage'
import FilmIndex from './components/FilmIndex/FilmIndex'
import FilmDetails from './components/Films/FilmDetails'
import Profile from './components/Home/Profile'
import ShowProfile from './components/Profile/ShowProfile'
import UpdateProfile from './components/Profile/UpdateProfile'
import CreateProfile from './components/Profile/CreateProfile'
import IndexProfiles from './components/Profile/IndexProfiles'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: [],
      profileId: '',
      profileData: null
    }
  }

  setUser = (user) => this.setState({ user })
  setProfile = (profileId) => this.setState({ profileId }) // profileId: profileId
  setProfileData = (profileData) => this.setState({ profileData })
  clearProfile = () => this.setState({ profileData: null })
  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state
    return (
      <Fragment>

        <Header user={user} />
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main>

          <Route exact path='/' render={() => <LandingPage />} />
          <Route exact path='/Ghibli-Flix' render={() => <LandingPage />} />

          <Route
            path='/FilmDetails/:id'
            render={() => (
              <FilmDetails msgAlert={this.msgAlert} user={this.state.user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/films'
            render={() => (
              <FilmIndex msgAlert={this.msgAlert} user={this.state.user} />
            )}
          />

          <Route
            path='/sign-up'
            render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/sign-in'
            render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/profile'
            render={() => (
              <Profile
                msgAlert={this.msgAlert}
                user={this.state.user}
                profileId={this.state.profileId}
                profileData={this.profileData}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/create-profile'
            render={() => (
              <CreateProfile
                msgAlert={this.msgAlert}
                user={user}
                setProfile={this.setProfile}
                setProfileData={this.setProfileData}
              />
            )}
          />

          <AuthenticatedRoute
            exact
            user={user}
            path='/profile/:id'
            render={() => <ShowProfile msgAlert={this.msgAlert} user={user} />}
          />

          <AuthenticatedRoute
            user={user}
            path='/profile/:id/edit'
            render={() => (
              <UpdateProfile msgAlert={this.msgAlert} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/profiles'
            render={() => (
              <IndexProfiles msgAlert={this.msgAlert} user={user} />
            )}
          />

        </main>

      </Fragment>
    )
  }
}

export default App
