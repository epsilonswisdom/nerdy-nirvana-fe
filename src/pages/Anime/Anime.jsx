import { Anime }  from '../../types/models'
console.log(Anime)

interface AnimeProps {
  anime: Anime || null;
}

const Anime = (props: AnimeProps): JSX.Element => {
  const { anime } = props
  
}