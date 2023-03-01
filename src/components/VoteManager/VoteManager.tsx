// assets
import React from 'react';
// adding sound to the voting function fun fun
import upSound from "../../assets/kingdom-hearts-sound-effects-saveload.mp3"
import downSound from "../../assets/kingdom-hearts-sound-effects-saveload.mp3"
import bean from '../../assets/shelter.png'
import noBean from '../../assets/shelter.png'
import useSound from 'use-sound';

// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms';
// npm modules
import { useState } from 'react'

interface VoteManagerProps {
	profile: Profile;
  handleVote: (formData: VoteManagerFormData) => void;
}

const VoteManager = (props: VoteManagerProps): JSX.Element => {
	const { profile, handleVote } = props

  const ratingOptions: [ 1, 2, 3, 4, 5 ] = [ 1, 2, 3, 4, 5 ]
  profile.votesReceived.forEach(vote => voteSum += vote.value)
  let voteSum = 0
  
  const voteCount = profile.votesReceived.length
  
  const profileRating = voteCount ? voteSum / voteCount : 1
  
  
  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)

    const[rateUp] = useSound(upSound, { volume: 0.2})
    const[rateDown] = useSound(downSound, {volume: 0.2})

    newValue > profileRating ? rateUp() : rateDown()
    
    handleVote({ value: newValue, profileId: profile.id })
  }
  const [hover, setHover] = useState<string | null>(null)

  const handleHover = (evt: React.MouseEvent): void => {
    if (evt.type === 'mouseover') {
      setHover(evt.currentTarget.id)
    } else if (evt.type === 'mouseleave') {
      setHover(null)
    }
  }
  

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          onClick={handleClick}
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
          src={rating <= (hover ?? profileRating) ? bean : noBean}
					alt="Bean Symbol"
          // will add new logo for the values of the taps
        />
      ))}
    </section>
  )
}

export default VoteManager