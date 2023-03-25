import { createContext, useContext, useEffect, useState } from 'react'
import cookies from 'js-cookie'
import { api } from '../utils/api'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebaseInit'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { backendApi } from '@/utils/backendApi'

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  photoURL: '',
  displayName: '',
  loginWithGoogle: () => {},
  loginWithEmail: (email: any, password: any) => {},
  signupWithEmail: (email: any, password: any) => {},
  logout: () => {},
  loading: true,
})

export const AuthProvider = ({ children }: any) => {
  //? router
  const router = useRouter()

  //? variables

  //? states
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [photoURL, setPhotoURL] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(true)

  //? functions
  const logout = () => {
    signOut(firebaseAuth)
      .then(() => {
        cookies.remove('accessToken')
        setUser(null)
        setPhotoURL('')
        setDisplayName('')
        delete api.defaults.headers.Authorization
      })
      .catch((err: any) => {
        toast.error(err.message)
      })
  }

  const signupWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true)
      api
        .post(`/api/auth?mode=signup`, {
          email: email,
          password: password,
        })
        .then((res: any) => {
          toast.success(res.data.message)
          setLoading(false)
          router.push('/login?newuser=true')
        })
    } catch (err: any) {
      if (err.result.code === 'auth/email-already-in-use') {
        toast.error('Email already registered')
      } else if (err.result.code === 'auth/invalid-email') {
        toast.error('Invalid Email')
      } else if (err.result.code === 'auth/weak-password') {
        toast.error('Weak Password')
      } else {
        toast.error('Something went wrong')
      }
    }
  }

  const loginWithEmail = (email: string, password: string) => {
    setLoading(true)
    api
      .post(`/api/auth?mode=login`, {
        email: email,
        password: password,
      })
      .then((res: any) => {
        const { accessToken } = res.data.result

        if (accessToken) {
          cookies.set('accessToken', accessToken, { expires: 120 })
          api.defaults.headers.Authorization = `Bearer ${accessToken}`
          api
            .get('/api/user/')
            .then((data: any) => {
              const { result: userData } = data
              const { profileImg, name } = userData

              if (userData) {
                setUser(userData)
                setPhotoURL(profileImg)
                setDisplayName(name)
              }

              toast.success('Login Successful')
              router.push('/')
              setLoading(false)
            })
            .catch((err) => {
              toast.error(err.message)
            })
        }
      })
      .catch((err: any) => {
        if (err.response.data.result.code === 'auth/user-not-found') {
          toast.error('Email not registered. Signup mow')
        } else if (err.response.data.result.code === 'auth/invalid-email') {
          toast.error('Invalid Email')
        } else if (err.response.data.result.code === 'auth/wrong-password') {
          toast.error('Wrong Password')
        } else if (err.response.data.result.code === 'auth/too-many-requests') {
          toast.error(
            'Account temporarily disabled. Try resetting your password'
          )
        } else {
          toast.error('Something went wrong')
        }
      })
  }

  const loginWithGoogle = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()

    signInWithPopup(firebaseAuth, provider)
      .then(async (res) => {
        const { user }: any = res
        const { accessToken } = user

        if (accessToken) {
          cookies.set('accessToken', accessToken, { expires: 120 })

          api.defaults.headers.Authorization = `Bearer ${accessToken}`
          const { data } = await api.post('/api/auth?mode=google')
          const { result: userData } = data
          const { profileImg, name } = userData

          if (userData) {
            setUser(userData)
            setIsAuthenticated(true)
            setPhotoURL(profileImg)
            setDisplayName(name)
          }
          toast.success('Login Successful')
          setLoading(false)
        }
      })
      .catch((err: any) => {
        toast.error(err.message)
      })
  }

  async function loadUserFromCookie() {
    setLoading(true)
    const accessToken = cookies.get('accessToken')
    if (accessToken) {
      api.defaults.headers.Authorization = `Bearer ${accessToken}`
      try {
        const { data } = await api.get('/api/db/user/')
        const { result: user } = data
        const { profileImg, name } = user
        if (user) {
          setUser(user)
          setPhotoURL(profileImg)
          setIsAuthenticated(true)
          setDisplayName(name)
        }
      } catch (err: any) {
        if (err.code === 'auth/id-token-expired') {
          cookies.remove('accessToken')
          setUser(null)
          delete api.defaults.headers.Authorization
        }
      }
    }
    setLoading(false)
  }

  //? effects
  useEffect(() => {
    if (loading) loadUserFromCookie()
  }, [loading])

  useEffect(() => {
    const routes = [
      {
        route: '/',
        public: true,
      },
      {
        route: '/events',
        public: true,
      },
      {
        route: '/profile',
        public: false,
      },
    ]

    routes.map((item: any) => {
      if (item.route === router.pathname) {
        if (!item.public) {
          if (!user) {
            router.push('/login')
          }
        } else {
          if (user) {
            if (router.pathname === '/login' || router.pathname === '/signup') {
              router.push('/')
            }
          }
        }
      }
    })
  }, [router, user])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        photoURL,
        displayName,
        loginWithGoogle,
        loginWithEmail,
        signupWithEmail,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
