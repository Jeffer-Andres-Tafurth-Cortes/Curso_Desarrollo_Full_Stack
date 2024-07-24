// Este archivo notes.js tiene la logica de Back-End para traer la respectiva informacion
// en este caso solo tenemos tres peticiones HTTP (get, post, put)

import axios from "axios"
const baseURL = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(baseURL)
  return request
    .then(response => response.data)
    .catch(error =>
      console.error(`Error fetching notes: ${error.message}`)
    )
}

const create = (newObject) => {
  const request = axios.post(baseURL, newObject)
  return request
    .then(response => response.data)
    .catch(error =>
      console.error(`Error fetching notes: ${error.message}`)
    )
}

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject)
  return request
    .then(response => response.data)
    .catch(error =>
      console.error(`Error fetching notes: ${error.message}`)
    )
}

export default { getAll, create, update}