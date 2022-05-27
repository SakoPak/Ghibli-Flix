
import { Card, Button, Container, Row } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import './filmCard.css'

// each film card will have an image, a few details and a 'more details' button

const FilmCard = (props) => {
  console.log(props)
  const { key, film } = props

  // 'key' is 'id' value
  return (
    <>
      <Container fluid>
        <Row class='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <Card key={key}>
              <h2>{film.title}</h2>
              <a href={`/films/${film.id}`}>
                <img
                  style={{ width: '65%', height: 'auto' }}
                  src={film.movie_banner}
                />
              </a>
              <dl>
                <dt>Release Date</dt>
                <dd>{film.release_date}</dd>
                <dt>Director</dt>
                <dd>{film.director}</dd>
              </dl>
              <Link to={`/FilmDetails/${film.id}`}>
                <Button class='btn btn-outline-dark'>More Details</Button>
              </Link>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  // also want to insert 'heart' icon to mark as a favorite
  )
}

export default FilmCard
