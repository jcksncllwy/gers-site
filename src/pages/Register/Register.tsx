import { useEffect, useState } from 'react'
import { supabase } from '../../APIClients/supabaseClient'

import BasicPage from '../../components/layouts/BasicPage'
import { Box, Card, CardContent, Step, StepLabel, Stepper, Typography } from '@mui/material';
import ContactForm, { Fields } from './ContactForm';
import { User } from '@supabase/supabase-js';
import { cvent, admissionItems } from '../../APIClients/cventClient';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Contact info', 'Payment details', 'Review your order'];

export type CventContactInfo = {
  firstName: string,
  lastName: string,
  email: string,
  company: string,
  title: string,
  id: string
}

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [cventToken, setCventToken] = useState('');
  const [contactInfo, setContactInfo] = useState<CventContactInfo | null>(null);
  const [cventContact, setCventContact] = useState<{ id: string } | null>(null);
  const [donationAmount, setDonationAmount] = useState<number>(0);

  useEffect(() => {
    const cventInit = async () => {
      const accessToken = await cvent.fetchToken();
      setCventToken(accessToken);
    }
    cventInit();
  }, [])

  const updateSupabaseProfile = async (user: User, { firstName, lastName, orgName, title, email }: Fields, cventContactID: string) => {
    try {
      const updates = {
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        org: orgName,
        title,
        cvent_contact_id: cventContactID,
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
      const contact = await cvent.createContact(cventToken, {
        firstName,
        lastName,
        email,
        company: orgName,
        title
      })
      setContactInfo(contact);
      if (user) {
        await updateSupabaseProfile(user, fields, contact.id)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  const addAttendee = async (admissionItemID: string) => {
    if (cventContact) {
      await cvent.addAttendeeToSummit(cventToken, cventContact.id, admissionItemID)
    } else {
      throw new Error("Missing Cvent Contact");
    }
  }

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ContactForm onSubmit={async (fields) => {
            await handleSignUp(fields);
            nextStep();
          }} />
        );
      case 1:
        return <PaymentForm onSubmit={({ amount }) => {
          setDonationAmount(Number(amount));
          nextStep();
        }} />;
      case 2:
        return <Review contactInfo={contactInfo} donationAmount={donationAmount} onSubmit={() => {
          console.log('Submit')
        }} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <BasicPage maxWidth='sm'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Card variant='elevation' sx={{ width: '100%' }}>
          <CardContent sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

            <Typography component="h1" variant="h4" align="center">
              Register
            </Typography>

            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, width: '100%' }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {getStepContent(activeStep)}

          </CardContent>
        </Card>
      </Box>
    </BasicPage>

  )
}