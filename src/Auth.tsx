import { FormEvent, useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

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
    <div aria-live="polite">
      <h1>Register</h1>
      <p>
        Register via magic link with your email below
      </p>
      {loading ? (
        'Sending magic link...'
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button aria-live="polite">
            Send magic link
          </button>
        </form>
      )}
    </div>
  )
}