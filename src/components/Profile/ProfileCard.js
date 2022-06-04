import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import './profileCard.css'

class ProfileCard extends Component {
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
    const { username, first, last, match, color } = this.props.profile

    return (
      <div className='container col-sm-10 col-md-8'>
        <>
          <Card className='card' border='light' style={{ width: '100px' }}>
            <Card.Header className='cardHeader'>
              {username}&apos;s Profile
            </Card.Header>
            <Card.Body className='cardColor'>
              <Card.Title className='cardColor'>
                <p>Hello {username}!</p>
              </Card.Title>
              <Card.Text>
                <p>First Name: {first}</p>
                <p>Last Name: {last}</p>
                <p>Totoro Color: {color}</p>
              </Card.Text>
              <>
                <Button
                  className='formButton btn1'
                  variant='outline-light'
                  onClick={this.handleDelete}>
                Delete
                </Button>

                <Button
                  className='formButton btn1'
                  variant='outline-light'
                  onClick={() =>
                    this.props.history.push(`/profile/${match.params.id}/edit`)
                  }>
                Update
                </Button>
              </>
            </Card.Body>
          </Card>
        </>
      </div>
    )
  }
}

export default withRouter(ProfileCard)
