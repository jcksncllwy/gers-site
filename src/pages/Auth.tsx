import { FormEvent, useState } from 'react'
import { supabase } from '../supabaseClient'
import Button from '@mui/material/Button';

import TextInput from '../components/atoms/TextInput'
import BasicPage from '../components/layouts/BasicPage'


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
          <TextInput
            label="Email"
            inputID="register-email" 
            placeholder="Your Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Name"
            inputID="register-name" 
            placeholder="Your Name"
            required
            type="text"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="contained">Hello</Button>
          <button aria-live="polite">
            Send magic link
          </button>
        </form>
      )}
    </div>
    </BasicPage>
    
  )
}