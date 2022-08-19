import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './APIClients/supabaseClient'
import { Session } from '@supabase/supabase-js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Auth from './pages/Auth';
import Splash from './pages/Splash';
import Agenda from './pages/Agenda';
import { SessionContext } from './contexts/SessionContext';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

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

  // Session Management
  useEffect(() => {
    setSession(supabase.auth.session())

    // Automagically updates session state whenever a supabase call changes the session
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SessionContext.Provider value={session}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Splash />} />
              <Route
                path="signin"
                element={<Auth />}
              />
              <Route
                path="agenda"
                element={<Agenda />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </SessionContext.Provider>
    </ThemeProvider>
  )

}