import './index.css'
import { useState, useEffect } from 'react'
import { getProfile, supabase } from './APIClients/supabaseClient'
import { Session, User } from '@supabase/supabase-js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/Register/Register';
import Splash from './pages/Splash';
import Agenda from './pages/Agenda';
import { SessionContext } from './contexts/SessionContext';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ThankYou } from './pages/ThankYou/ThankYou';
import { UserContext } from './contexts/UserContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(0, 30, 60)',
      paper: 'rgb(0, 30, 60)'
    }
  },
});

export default function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)

  // Session Management
  useEffect(() => {
    const supabaseSession = supabase.auth.session()
    setSession(supabaseSession)

    const initUser = async (session: Session) => {
      if (session) {
        console.log('Populating User Profile from Session')
        const userProfile = await getProfile(session);
        setUser(userProfile)
      }
    }
    if (supabaseSession) {
      initUser(supabaseSession);
    }

    // Automagically updates session state whenever a supabase call changes the session
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        initUser(session);
      }
    })
  }, [])



  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <UserContext.Provider value={user} >
        <SessionContext.Provider value={session}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Splash />} />
                <Route
                  path="register"
                  element={<Register />}
                />
                <Route
                  path="thank-you"
                  element={<ThankYou />}
                />
                <Route
                  path="agenda"
                  element={<Agenda />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </SessionContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  )

}