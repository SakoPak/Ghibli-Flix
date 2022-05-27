import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { createProfile } from '../../api/profile'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class CreateProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      first: '',
      last: '',
      color: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

setName (event) {
  this.setState({
    name: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  console.log(this.props)
  const { user, msgAlert, history, setProfile, setProfileData } = this.props
  let responseData
  createProfile(this.state, user)
    .then((res) => {
      msgAlert({
        heading: 'Profile created',
        message: 'Profile created!',
        variant: 'success'
      })
      return res
    })
    .then((res) => {
      setProfile(res.data.profile._id)
      setProfileData(res.data.profile)
      return (responseData = res.data.profile._id)
    })
    .then(() => { console.log(responseData) })
    .then(() => {
      history.push('/profile')
    })
    .catch((error) => {
      msgAlert({
        heading: 'Profile creation failed',
        message: 'Profile error: ' + error.message,
        variant: 'danger'
      })
    })
}

render () {
  return (
    <>
      <div
        className='modal modal-createProfile position-static d-block py-5'
        tabIndex='-1'
        role='dialog'
        id='modalCreate'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content rounded-5 shadow'>
            <div className='modal-header p-5 pb-4 border-bottom-0'>
              {/* <h5 className='modal-title'>Hello{this.props.username}</h5> */}
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>

            <div className='modal-body p-5 pt-0'>
              <Form onSubmit={this.handleSubmit}>
                <div className='form-floating mb-3'>
                  <h3>Create Profile</h3>
                  {/* <span className='material-icons'>account_circle</span> */}
                </div>
                <Form.Group controlId='username'>
                  <Form.Label for='floatingInput'>Username</Form.Label>
                  <Form.Control
                    required
                    name='username'
                    value={this.state.username}
                    placeholder='User Name'
                    onChange={this.handleChange}
                    class='form-control rounded-4'
                  />
                </Form.Group>

                <div className='form-floating mb-3'>
                  <Form.Group controlId='first'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      name='first'
                      value={this.state.first}
                      placeholder='First Name'
                      onChange={this.handleChange}
                      class='form-control rounded-4'
                    />
                  </Form.Group>
                </div>

                <div className='form-floating mb-3'>
                  <Form.Group controlId='last'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      name='last'
                      value={this.state.last}
                      placeholder='Last Name'
                      onChange={this.handleChange}
                      class='form-control rounded-4'
                    />
                  </Form.Group>
                </div>

                <div className='form-floating mb-3'>
                  <Form.Group>
                    <Form.Label for='floatingSelect'>What Color Totoro Would You Be?
                    </Form.Label>
                    <p>Pick a Fave: Grey, Blue, Yellow, Purple, Pink!</p>
                    <Form.Control
                      name='color'
                      value={this.state.color}
                      placeholder='Color'
                      onChange={this.handleChange}
                      className='form-control rounded-4'
                    />
                  </Form.Group>
                </div>
                <Button className='btn2 btn-lg'
                  variant='outline-secondary'
                  type='submit'>Save Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
}

export default withRouter(CreateProfile)

// example
// {/* <a href="#" class="nav-link text-white">
//           <svg class="bi me-2" width="16" height="16">< "#people-circle"/></svg>
//           Customers
//         </a> */}

// <Link to={'/profile'} className='nav-link'>
//   <Button
//     className='btn2 btn-lg'
//     variant='outline-secondary'
//     type='submit'>Save Profile
//   </Button>
// </Link>

// eslint-disable-next-line no-lone-blocks

/* <      <label htmlFor='DataList' className='form-label'>Pick a Color
                  </label>
                <input class="form-control" list="datalistOptions" id="colorList" placeholder="Type for choices...">
                <datalist id="datalistOptions">
                  <option value='grey'>
                  <option value='blue'>
                  <option value='yellow'>
                  <option value='purple'>
                  <option value='pink'>
                  </datalist> */

//   { /* <Link to={'/profile'} className='nav-link' msgAlert={this.props.msgAlert} user={this.props.user}> */ }

//   {
//     /* </Link> */
//   }

//   {
//     /* <Button
//                   className='btn2 btn-lg'
//                   variant='outline-secondary'
//                   type='submit'>Save Profile
//                 </Button> */
//   }
// }
