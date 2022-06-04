import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import FilmCard from '../Films/FilmCard'
import { indexFilms } from '../../api/films'

// Page where all films are displayed
function FilmIndex (props) {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const { user } = props
    indexFilms(user)
      .then((res) => res.data)
      .then((res) => {
        // passing all films + response as args to 'setFilms' function
        setFilms(res)
      })
      .catch((error) => console.error('Error: ', error))
  }, [])

  // map through films
  // display film cards on grid

  let filmCards
  if (!films) {
    filmCards = 'Loading...'
  } else {
    filmCards = films.map((film) => {
      return (
        <>
          <Col sm='4'>
            <FilmCard key={film.id} film={film} />
          </Col>
        </>
      )
    })
  }

  return (
    <>
      <Container style={{ width: '85%', margin: '5rem auto' }}>
        <h1> Ghibli Library </h1>
        <hr />
        <Row>{filmCards}</Row>
      </Container>

    </>
  )
}

export default withRouter(FilmIndex)
