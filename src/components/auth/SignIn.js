import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './signIn.css'
import howl from '../../Assets/howl.jpg'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignIn = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signIn(this.state)
    .then((res) => setUser(res.data.user))
    .then(() =>
      msgAlert({
        heading: 'Sign In Success',
        message: signInSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/profile'))
    .catch((error) => {
      this.setState({ username: '', password: '' })
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { username, password } = this.state

  return (
    <>
      <div className='img-prop'>
        <div
          className='app-container'
          style={{
            backgroundImage: `url(${howl})`
          }}>
          <div className='container col-xl-10 col-xxl-8 px-4 py-5'>
            <div className='row align-items-center g-lg-5 py-5'>
              <div className='col-lg-7 text-center text-lg-start text-black'>
                <h1 className='display-4 fw-bold lh-1 mb-3 text-black'>
                Ghibli Fact
                </h1>
                <p className='col-lg-10 fs-4 text-black'>
                &apos;Ghibli&apos; is an Italian word, named after the hot
                wind that blows in the Sahara desert! Miyazaki wanted to
                &apos;create a whirlwind in the Japanese animation
                world.&apos;
                </p>
              </div>

              <div className='col-md-10 mx-auto col-lg-5'>
                <div className='p-4 p-md-5 border rounded-3 bg-light signinbox'>
                  <h2 className='text-center'>Sign In</h2>
                  <Form onSubmit={this.onSignIn}>
                    <div className='form-floating mb-3'>
                      <Form.Group controlId='username'>
                        <Form.Label for='floatingInput'>Username</Form.Label>
                        <Form.Control
                          required
                          type='username'
                          name='username'
                          value={username}
                          placeholder='Enter username'
                          onChange={this.handleChange}
                          id='floatingInput'
                        />
                      </Form.Group>
                    </div>

                    <div className='form-floating mb-3'>
                      <Form.Group controlId='password'>
                        <Form.Label for='floatingPassword'>Password</Form.Label>
                        <Form.Control
                          required
                          name='password'
                          value={password}
                          type='password'
                          placeholder='Password'
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </div>

                    <Button variant='primary' type='submit'>
                    Submit
                    </Button>
                    <hr className='my-4'></hr>
                    <p className='mt-5 mb-3 text-muted'>
                    &copy; Happy Ghibli-ing!
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
}

export default withRouter(SignIn)
