import { API_URL } from '../components/componentConfig'
import axios from 'axios'

export const createFilm = (data, user) => {
  return axios({
    method: 'POST',
    url: API_URL + '/films/',
    data: {
      film: {
        id: data.id,
        title: data.title,
        original_Title: data.original_Title,
        original_title_romanised: data.original_title_romanised,
        image: data.image,
        movie_banner: data.movie_banner,
        description: data.description,
        director: data.director,
        producer: data.producer,
        release_date: data.release_date,
        running_time: data.running_time,
        rating: data.rating,
        people: data.people
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateFilm = (data, id, user) => {
  return axios({
    url: API_URL + '/films/' + id,
    method: 'PATCH',
    data: {
      film: {
        id: data.id,
        title: data.title,
        original_Title: data.original_Title,
        original_title_romanised: data.original_title_romanised,
        image: data.image,
        movie_banner: data.movie_banner,
        description: data.description,
        director: data.director,
        producer: data.producer,
        release_date: data.release_date,
        running_time: data.running_time,
        rating: data.rating,
        people: data.people
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showFilm = (id, user) => {
  return axios({
    url: API_URL + '/films/' + id,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteFilm = (id, user) => {
  return axios({
    url: API_URL + '/films/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const indexFilms = (user) => {
  console.log(user)
  return axios({
    url: API_URL + '/films/',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
