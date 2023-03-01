// npm packages
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms';
import ProfileCard from '../../components/Profile/ProfileCard';

interface ProfilesProps {
	profiles: Profile[];
  handleVote: (formData: VoteManagerFormData) =>void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [])

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
return (
  <main className='list'>
    {props.profiles.map((profile: Profile) =>
      <ProfileCard
        key={profile.id.toString()}
        profile={profile}
        handleVote={props.handleVote}
      />
    )}
  </main>
)
    </>
  )
}
export default Profiles
