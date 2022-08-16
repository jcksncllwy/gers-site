import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Session } from '@supabase/supabase-js'

import BasicPage from './components/layouts/BasicPage'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <BasicPage><h1>HELLO</h1></BasicPage>
  )
}