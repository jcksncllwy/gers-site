import { FormEvent, useState } from 'react'
import { supabase } from '../supabaseClient'
import Button from '@mui/material/Button';

import TextInput from '../components/atoms/TextInput'
import BasicPage from '../components/layouts/BasicPage'
import { TextField } from '@mui/material';


export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error?.error_description || error?.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <BasicPage>
      <div aria-live="polite">
      <h1>Register</h1>
      <p>
        Register with your email address below
      </p>
      {loading ? (
        'Sending magic link...'
      ) : (
        <form onSubmit={handleLogin}>
          <TextField id="email" label="Email" required variant="outlined" />
          <button aria-live="polite">
            Send magic link
          </button>
        </form>
      )}
    </div>
    </BasicPage>
    
  )
}