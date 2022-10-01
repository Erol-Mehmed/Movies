




















import axios from 'axios'
import { clearUserData, setUserData } from '../util.js'

export async function login(username, password) {
  const user = await axios.post('http://localhost:3100/api/login', {
    username,
    password,
  })
  console.log(user);
  setUserData(user)
}

export async function register(username, password) {
  const user = {
    username,
    password,
  }

  await axios.post('http://localhost:3100/api/register', user)
  setUserData(user)
}

export function logout() {
  clearUserData()
}
