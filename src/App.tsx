import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Session } from '@supabase/supabase-js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Account from "./pages/Account";
import Auth from './pages/Auth';
import Splash from './pages/Splash';
import Agenda from './pages/Agenda';
import { Box } from '@mui/material';

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Splash />} />
            <Route 
              path="agenda" 
              element={<Agenda />}
            />
            <Route 
              path="account" 
              element={<Account session={session} />}
            />
            <Route 
              path="signin" 
              element={<Auth />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
  )

}