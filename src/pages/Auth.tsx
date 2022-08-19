import { useEffect, useState } from 'react'
import { supabase } from '../APIClients/supabaseClient'

import BasicPage from '../components/layouts/BasicPage'
import { Box, Card, CardContent, Typography } from '@mui/material';
import AttendeeRegistrationForm, { Fields } from '../components/organisms/AttendeeRegistrationForm';
import { User } from '@supabase/supabase-js';
import { cvent, admissionItems } from '../APIClients/cventClient';

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [cventToken, setCventToken] = useState('');

  useEffect(() => {
    console.log(`useEffect`)
    const cventInit = async () => {
      const accessToken = await cvent.fetchToken();
      setCventToken(accessToken);      
    }
    cventInit();
  }, [])

  const updateSupabaseProfile = async (user: User, { firstName, lastName, orgName, title, email }: Fields) => {
    try {
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
    }
  }

  const handleSignUp = async (fields: Fields) => {
    const { firstName, lastName, orgName, title, email, password } = fields;
    try {
      const { user, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      if (user) {
        await updateSupabaseProfile(user, fields)
        const cventContact = await cvent.createContact(cventToken, {
          firstName,
          lastName,
          email,
          company: orgName,
          title
        })
        console.log(`contact: ${JSON.stringify(cventContact, null, 4)}`);

        await cvent.addAttendeeToSummit(cventToken, cventContact.id, admissionItems.free.id)
      }
    } catch (error: any) {
      console.log(error)
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