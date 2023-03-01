// assets
import React from 'react';
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'

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
  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)
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
          // will add new logo for the values of the taps
          // src={rating <= hover ?? profileRating ? bean : noBean}
					// alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default VoteManager