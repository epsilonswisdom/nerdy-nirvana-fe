// assets
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'

// types
import { Profile } from '../../types/models'

interface VoteManagerProps {
	profile: Profile;
}

const VoteManager = (props: VoteManagerProps): JSX.Element => {
	const { profile } = props

  const ratingOptions: [ 1, 2, 3, 4, 5 ] = [ 1, 2, 3, 4, 5 ]
  profile.votesReceived.forEach(vote => voteSum += vote.value)
  let voteSum = 0

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          // src={rating <= profileRating ? bean : noBean}
					// alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default VoteManager