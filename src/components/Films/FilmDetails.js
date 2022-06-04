import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { showFilm } from '../../api/films'
import './filmsDetail.css'
import { Button } from 'react-bootstrap'
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

  if (currentFilm) {
    return (
      <div className='card mb-3'>
        <div className='DetailPage'>
          <div className='DetailCard'>
            <div className='FilmBanner'>
              <img className='card-img-top' src={currentFilm.movie_banner} />
            </div>
            <div className='card-body'>
              <h3 className='card-title'>
                <p className='display-inline'>
                  {currentFilm.title} ({currentFilm.release_date})
                </p>{' '}
                <Link to={'/films/'}>
                  <Button className='btn btn-outline btn-sm'>View All Films
                  </Button>
                </Link>
              </h3>

              <div className='card-text'>
                <p className='display-inline'>Original Title: {currentFilm.original_title}
                </p>
              </div>
              <div className='card-text'>
                <p className='display-inline'>Romanised Title: {currentFilm.original_title_romanised}
                </p>
              </div>
              <div className='card-text'>
                <p className='display-inline'>Director: {currentFilm.director}
                </p>
              </div>
              <div className='card-text'>
                <p className='display-inline'>Producer: {currentFilm.producer}
                </p>
              </div>
              <div className='card-text'>
                <p className='display-inline'>Rotten Tomatoes: {currentFilm.rt_score}
                </p>
              </div>
              <div className='card-text'>
                <p className='display-inline'>Running Time: {`${currentFilm.running_time} minutes`}
                </p>
              </div>
              <div className='card-text'>
                <p>{`Summary:    ${currentFilm.description}`}</p>
              </div>
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
