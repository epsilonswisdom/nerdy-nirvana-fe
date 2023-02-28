import * as tokenService from './tokenService'
// for every model in the backend you need to render it here for typescript to call upon it similar to Unit 3
//types
import {Profile, Anime } from '../types/models'

const BASE_URL = `${import.meta.env.Vite_BACK_END_SERVER_URL}/api/anime`

async function getAllAnime(): Promise<Anime[]> {
  try {
    const res = await fetch( BASE_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    })
    return await res.json() as Anime[]
  } catch (error) {
    throw error
  }
}

export { getAllAnime }