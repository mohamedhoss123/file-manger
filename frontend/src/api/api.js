import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000/api"

export function createFolder(data) {
  return axios.post("/folder",data)
}