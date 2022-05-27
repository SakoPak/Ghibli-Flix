import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import FilmCard from '../Films/FilmCard'
import { indexFilms } from '../../api/films'
import './filmIndex.css'

// Page where all films are displayed
function FilmIndex (props) {
  const [films, setFilms] = useState([])

  useEffect(() => {
    console.log(props)
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
  // want to display film cards on grid

  return (
    <Container
      style={{ width: '85%', margin: '1rem auto' }} >
      <div>
        <h1> Ghibli Library </h1>
        <hr />
        {films
          ? films.map((film) => {
            return (
              <FilmCard key={film.id} film={film} />
            )
          })
          : 'loading...'}
      </div>
    </Container>
  )
}

export default withRouter(FilmIndex)
