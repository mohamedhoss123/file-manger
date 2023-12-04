import axios from "axios"


const api = axios.create({
  baseURL:"http://localhost:3000/api",
})

export function createFolder(data) {
  return api.post("/folder",data)
}