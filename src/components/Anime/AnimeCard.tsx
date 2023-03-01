import { Link } from "react-router-dom"

//types

import { Anime, User } from '../../types/models'

import styles from './AnimeCard.module.css'

interface AnimeProps{
  anime: Anime;
  handleDeleteAnime: (id:number) => Promise<void>;
  user: User | null
}

const AnimeCard = (props: AnimeProps): JSX.Element => {
  const {anime, handleDeleteAnime, user} = props

  return (
    <article>
      <h1>{anime.title}</h1>
      <h3>{anime.genre}</h3>
      <h4>{anime.value}</h4>
      {anime.profileId === user?.id && (
        <>
        <Link to={`/animes/{anime.id}/update`} state={{anime}}>
          <button className={styles.button}></button>
          </Link>
          <button className={styles.button} onClick={() => handleDeleteAnime(anime.id)}>Delete</button>
        </>   
    )}
    </article>
      

  )
}

export default AnimeCard