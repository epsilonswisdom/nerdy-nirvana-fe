//npm packages
import { useState } from 'react';
//types
import { Anime, User } from '../../types/models'

// componenents 
import AnimeCard from '../../components/Anime/AnimeCard'

import CreateAnime from '../CreateAnime/CreateAnime';

//services



interface AnimeProps {
  animes: Anime[];
  // handle Delete functionality will go here 
  handleDeleteAnime: (id: number) => Promise<void>,
  
  
  user: User |null
  
  

}
const Animes = (props: AnimeProps): JSX.Element => {
  const { animes, handleDeleteAnime, user,} = props


  if(!animes.length) return <p>List of Anime</p>
    


  return (
    
    <main className='animeList'>

      {animes.map((anime: Anime) =>
        <AnimeCard key={anime.id} anime ={anime} handleDeleteAnime={handleDeleteAnime} user={user}/>
      )}
    </main>
    

  )
}

export default Animes
