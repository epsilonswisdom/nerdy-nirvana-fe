// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'
// services
import * as authService from '../../services/authService'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = ({ user, handleLogout }: LandingProps): JSX.Element => {
  const handleDeleteAccount = async(): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'Users'}</h1>
      <h2>Welcome</h2>
      { user &&
      <button onClick={handleDeleteAccount}>Delete Account!!</button>}
    </main>
  )
}

export default Landing
