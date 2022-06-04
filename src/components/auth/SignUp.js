import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Away from '../../Assets/Away.jpg'
import './signup.css'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignUp = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signUp(this.state)
    .then(() => signIn(this.state))
    .then((res) => setUser(res.data.user))
    .then(() =>
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/profile'))
    .catch((error) => {
      this.setState({ email: '', password: '', passwordConfirmation: '' })
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { username, email, password, passwordConfirmation } = this.state

  return (
    <div
      className='signup-container'
      style={{ backgroundImage: `url(${Away})` }}>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          className='modal modalSignin position-static d-block py-5'
          tabIndex='-1'
          role='button'
          id='modalSignin'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content rounded-5 shadow'>
              <div className='modal-header p-5 pb-4 border-bottom-0'>
                <h2 className='modal-title'>Sign Up</h2>
                <button
                  id='closeModal'
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'></button>
              </div>

              <div className='modal-body p-5 pt-0'>
                <div className='form-floating mb-3'>
                  <Form.Group controlId='username'>
                    <Form.Label for='floatingInput'></Form.Label>
                    <Form.Control
                      required
                      type='username'
                      name='username'
                      value={username}
                      placeholder='Enter username'
                      onChange={this.handleChange}
                      // id='floatingInput'
                      className='form-control rounded-4'
                    />
                  </Form.Group>
                </div>

                <Form onSubmit={this.onSignUp}>
                  <div className='form-floating mb-3'>
                    <Form.Group controlId='email'>
                      <Form.Label for='floatingInput'></Form.Label>
                      <Form.Control
                        required
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter email'
                        onChange={this.handleChange}
                        // id='floatingInput'
                        className='form-control rounded-4'
                      />
                    </Form.Group>
                  </div>

                  <div className='form-floating mb-3'>
                    <Form.Group controlId='password'>
                      <Form.Label for='floatingPassword'></Form.Label>
                      <Form.Control
                        required
                        name='password'
                        value={password}
                        type='password'
                        placeholder='Password'
                        onChange={this.handleChange}
                        // id='floatingPassword'
                        className='form-control rounded-4'
                      />
                    </Form.Group>
                  </div>

                  <div className='form-floating mb-3'>
                    <Form.Group controlId='passwordConfirmation'>
                      <Form.Label for='floatingPassword'></Form.Label>
                      <Form.Control
                        required
                        name='passwordConfirmation'
                        value={passwordConfirmation}
                        type='password'
                        placeholder='Confirm Password'
                        onChange={this.handleChange}
                        // id='floatingPassword'
                        className='form-control rounded-4'
                      />
                    </Form.Group>
                  </div>

                  <Button
                    className='w-100 mb-2 btn btn-lg rounded-4 btn-primary'
                    type='submit'>
                  Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default withRouter(SignUp)
