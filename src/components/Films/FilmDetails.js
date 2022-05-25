import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { showFilm } from '../../api/films'

// this is the 'back' of the film card

function FilmDetails (props) {
  const { user } = props
  const [currentFilm, setCurrentFilm] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    showFilm(id, user)
      .then(res => setCurrentFilm(res.data))
      .catch(console.error)
  }, [])

  // {() => {
  //   if (currentFilm) {
  //     return (
  //        <jsx>
  //     )
  //   }
  // }}

  if (currentFilm) {
    return (
      <div className='DetailPage'>
        <div className='DetailCard'>
          <div className='FilmBanner'>
            <img src={currentFilm.movie_banner} />
          </div>
          <div className='InfoContainer'>
            <div className='MovieInfo'>
              <p>Film Title:</p>
              <p>{currentFilm.title}</p>
            </div>
            <div className='MovieInfo'>
              <p>Original Title:</p>
              <p>{currentFilm.original_title}</p>
            </div>
            <div className='MovieInfo'>
              <p>Romanised Title:</p>
              <p>{currentFilm.romanised_title}</p>
            </div>
            <div className='MovieInfo'>
              <p>Director:</p>
              <p>{currentFilm.director}</p>
            </div>
            <div className='MovieInfo'>
              <p>Producer:</p>
              <p>{currentFilm.producer}</p>
            </div>
            <div className='MovieInfo'>
              <p>Release Year:</p>
              <p>{currentFilm.release}</p>
            </div>
            <div className='MovieInfo'>
              <p>Rotten Tomatoes:</p>
              <p>{currentFilm.rt_score}</p>
            </div>
            <div className='MovieInfo'>
              <p>Running Time:</p>
              <p>{`${currentFilm.running_time} minutes`}</p>
            </div>
            <div className='Description'>
              <p>{`Summary:    ${currentFilm.description}`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <p>loading</p>
  }
}

export default FilmDetails
