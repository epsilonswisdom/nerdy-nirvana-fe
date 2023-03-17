// assets
import defaultPic from '../../assets/profile.png'
import styles from './ProfileCard.module.css'
// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms';
//components
import VoteManager from '../VoteManager/VoteManager';

interface ProfileCardProps {
  profile: Profile;
  handleVote: (formData: VoteManagerFormData) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <article className={styles.article}>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>

      <VoteManager { ...props }/>

    </article>

  )
}

export default ProfileCard