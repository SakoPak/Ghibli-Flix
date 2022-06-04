
import { Card, Button, Container, Row } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import './filmCard.css'

const FilmCard = (props) => {
  const { key, film } = props

  // 'key' is 'id' value
  return (
    <>
      <Container fluid>
        <Row class='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col shadow bg-body rounded'>
            <Card key={key}>
              <a href={`/films/${film.id}`}>
                <img
                  style={{ width: '100%', height: '100' }}
                  src={film.image}
                />
              </a>
              <dl>
                <h4 className='title'>{film.title}</h4>
                <dt>Release Date</dt>
                <dd>{film.release_date}</dd>
                <dt>Director</dt>
                <dd>{film.director}</dd>
              </dl>
              <div className='footer'>
                <Link to={`/FilmDetails/${film.id}`}>
                  <Button class='btn-sm btn-outline-light'>More Details</Button>
                </Link>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default FilmCard
