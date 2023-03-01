import * as tokenService from './tokenService'
// for every model in the backend you need to render it here for typescript to call upon it similar to Unit 3
//types
import { Anime } from '../types/models'

const BASE_URL = `${import.meta.env.Vite_BACK_END_SERVER_URL}/api/animes`

async function fetchAllAnimes(): Promise<Anime[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Anime[]
  } catch (error) {
    throw error
  }
}

export { fetchAllAnimes }