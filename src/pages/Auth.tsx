import { useEffect, useState } from 'react'
import { supabase } from '../APIClients/supabaseClient'

import BasicPage from '../components/layouts/BasicPage'
import { Box, Card, CardContent, Typography } from '@mui/material';
import AttendeeRegistrationForm, { Fields } from '../components/organisms/AttendeeRegistrationForm';
import { User } from '@supabase/supabase-js';
import { cvent } from '../APIClients/cventClient';

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [cventToken, setCventToken] = useState(null);

  useEffect(() => {
    console.log(`useEffect`)
    const cventInit = async () => {
      const accessToken = await cvent.fetchToken();
      setCventToken(accessToken);
      const event = await cvent.getSummitEvent(accessToken);
    }
    cventInit();
  }, [])

  const updateProfile = async (user: User, { firstName, lastName, orgName, title, email }: Fields) => {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        org: orgName,
        title,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error: any) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (fields: Fields) => {
    const { email, password } = fields;
    try {
      setLoading(true)
      const { user, error } = await supabase.auth.signIn({ email, password })
      console.log(`User: ${user}`);
      if (error) throw error
      if (user) {
        await updateProfile(user, fields)
      }
    } catch (error: any) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <BasicPage maxWidth='sm'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Card variant='outlined' sx={{ width: '100%' }}>
          <CardContent sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography variant="h5" gutterBottom>
              Register
            </Typography>
            {loading ? (
              'Sending magic link...'
            ) : (
              <AttendeeRegistrationForm onSubmit={handleSignUp} />
            )}
          </CardContent>
        </Card>
      </Box>
    </BasicPage>

  )
}