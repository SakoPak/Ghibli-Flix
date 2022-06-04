import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './changePassword.css'
import Banner7 from '../../Assets/Banner7.jpeg'

class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onChangePassword = (event) => {
  event.preventDefault()

  const { msgAlert, history, user } = this.props

  changePassword(this.state, user)
    .then(() =>
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/profile'))
    .catch((error) => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { oldPassword, newPassword } = this.state

  return (
    <div
      className='password-container'
      style={{ backgroundImage: `url(${Banner7})` }}>
      <div
        className='modal modal-pw position-static d-block py-5'
        tabIndex='-1'
        role='dialog'
        id='modalPw'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content rounded-5 shadow'>
            <div className='modal-header p-5 pb-4 border-bottom-0'>
              <h2 className='modal-title'>Change Password</h2>
              <button
                id='closeModal'
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>

            <div className='modal-body p-5 pt-0'>
              <div className='form-floating mb-3'>
                <Form onSubmit={this.onChangePassword}>
                  <div className='form-floating mb-3'>
                    <Form.Group controlId='oldPassword'>
                      <Form.Label>Old password</Form.Label>
                      <Form.Control
                        required
                        name='oldPassword'
                        value={oldPassword}
                        type='password'
                        placeholder='Old Password'
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </div>

                  <div className='form-floating mb-3'>
                    <Form.Group controlId='newPassword'>
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        required
                        name='newPassword'
                        value={newPassword}
                        type='password'
                        placeholder='New Password'
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </div>
                  <Button class='w-100 mb-2 btn btn-lg rounded-4 btn-primary'type='submit'>Submit</Button>
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

export default withRouter(ChangePassword)
