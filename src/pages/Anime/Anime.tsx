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
    <main className='animeList'>
      {/* {animes.map((anime: Anime) =>
      <AnimeCard key={anime.profile} anime={anime}/>
      )} */}
    </main>
  )
}

export default Animes