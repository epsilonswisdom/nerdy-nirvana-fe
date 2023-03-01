import * as tokenService from './tokenService'
// for every model in the backend you need to render it here for typescript to call upon it similar to Unit 3
//types
import { Anime } from '../types/models'
import { AnimeFormData } from '../types/forms'
// import { json } from 'react-router'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/animes`

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

async function create(formData: AnimeFormData ): Promise<Anime> {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    })
    return await res.json() as Anime
  } catch (error) {
    throw error
  }
}

async function deleteAnime(id: number): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

async function update(animeData: Anime): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/${animeData.id}`,{
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animeData)
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

export { fetchAllAnimes, create, deleteAnime, update }