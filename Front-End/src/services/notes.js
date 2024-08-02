// Este archivo notes.js tiene la logica de Back-End para traer la respectiva informacion
// en este caso solo tenemos tres peticiones HTTP (get, post, put)

import axios from "axios"
const baseURL = '/api/notes'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseURL)
  return request
    .then(response => response.data)
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token}
  }

  const response = await axios.post(baseURL, newObject, config)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject)
  return request
    .then(response => response.data)
}

export default { getAll, create, update, setToken}