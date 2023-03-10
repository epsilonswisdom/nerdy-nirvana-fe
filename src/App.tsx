// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Animes from './pages/Anime/Anime'
import CreateAnime from './pages/CreateAnime/CreateAnime'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as animeService from './services/animeService'
import * as voteService from './services/voteService'

// stylesheets
import './App.css'

// types
import { User, Profile, Anime } from './types/models'
import { VoteManagerFormData, AnimeFormData } from './types/forms'
// import  {AnimeFormData}  from './types/forms'



function App(): JSX.Element {
  const navigate = useNavigate()

  const [profiles, setProfiles] = useState<Profile[]>([])
  
  const [animes, setAnimes] = useState<Anime[]>([])

  const [user, setUser] = useState<User | null>(authService.getUser())

  const handleCreateAnime = async (animeData: AnimeFormData): Promise<void> => {
    const createAnime = await animeService.create(animeData)
    setAnimes([createAnime, ...animes],)
    navigate('/animes')
  }

  const handleDeleteAnime = async (id: number): Promise<void> => {
    await animeService.deleteAnime(id)
    setAnimes(animes.filter(a => a.id !== id))
  }

  const handleUpdateAnime = async (animeData: Anime): Promise<void> => {
    const UpdateAnime = await animeService.update(animeData)
    // setAnimes(animes.map((a) => animeData.id === a.id ? UpdateAnime : a))
  }

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles() : setProfiles([])
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleVote = async(formData: VoteManagerFormData): Promise<void> => {
    try {
      const updatedProfile = await voteService.castVote(formData)

      setProfiles(profiles.map((profile) => (
        profile.id === updatedProfile.id ? updatedProfile : profile
      )))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect((): void => {
    const fetchAnimes = async (): Promise<void> => {
      try {
        const animeData: Anime[] = await animeService.fetchAllAnimes()
        setAnimes(animeData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchAnimes() : setAnimes([])
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} handleLogout={handleLogout} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles profiles={profiles} handleVote={handleVote} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/new-animes'
          element={
            <ProtectedRoute user={user}>
              <CreateAnime handleCreateAnime={handleCreateAnime} />
            </ProtectedRoute>
          }
        />
        {/* <Route
        path='/animes/:id/update'
        element={
          <ProtectedRoute user={user}>
            <UpdateAnime handleUpdateAnime={handleUpdateAnime} />
          </ProtectedRoute>
        }
        /> */}
        <Route
          path='/animes'
          element={
            <ProtectedRoute user={user}>
              <Animes user={user} animes={animes} handleDeleteAnime={handleDeleteAnime} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
