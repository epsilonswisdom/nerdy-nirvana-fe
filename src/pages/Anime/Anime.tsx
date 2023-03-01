//npm packages


import AnimeCard from '../../components/Anime/AnimeCard'

//services
import * as animeService from '../../services/animeService'

//types
import { Anime } from '../../types/models'

interface AnimeProps {
  animes: Anime[]
  //handle Delete functionality will go here 
  //handleDeleteAnime: (id: number) => Promise<void>
}

const Animes = (props: AnimeProps): JSX.Element => {
  const { animes,} = props

  if(!animes.length) return <p>List of Anime</p>

  return (
    <>
    <h1> Hello This is a list of all the Anime</h1>
    {animes.map((anime: Anime) =>
    <p key={anime.title}>{anime.genre}</p>
    )}
    </>

  )
}

export default Animes