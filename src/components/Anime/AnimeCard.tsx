import { Link } from "react-router-dom"

//types

import { Anime } from '../../types/models'

interface AnimeProps{
  anime: Anime;

}

const AnimeCard = (props: AnimeProps): JSX.Element => {
  const {anime} = props

  return (
    <article>
      <h1>{anime.title}</h1>
      <h3>{anime.genre}</h3>

    </article>
  )
}

export default AnimeCard