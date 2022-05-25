
import { Card, Button, Container, Row } from 'react-bootstrap'

import React from 'react'
import { Link } from 'react-router-dom'

// each film card will have an image, a few details and a 'more details' button

const FilmCard = (props) => {
  console.log(props)

  const { key, film } = props
  // 'key' is 'id' value

  //   const imageCard = {
  //     backgroundImage: `${film.image}`,
  //     backgroundSize: 'cover'
  //   }

  return (
    <>
      <Container fluid>
        <Row class='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <Card key={key}>
              <h2>{film.title}</h2>
              <a href={`/films/${film.id}`}>
                <img
                  style={{ width: '65%', height: '320px' }}
                  src={film.movie_banner}
                />
              </a>
              <dl>
                {/* <div key={key} image={film.image} style={imageCard}></div> */}
                <dt>Release Date</dt>
                <dd>{film.release_date}</dd>
                <dt>Director</dt>
                <dd>{film.director}</dd>
              </dl>
              <Link to={`/FilmDetails/${film.id}`}>
                <Button>More Details</Button>
              </Link>
              {/* <Button
                className='myButton'
                to={`/FilmDetails/${film.id}`}
                key={key}>More Details
              </Button> */}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  // also want to insert 'heart' icon to mark as a favorite
  )
}

export default FilmCard
