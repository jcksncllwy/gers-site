import { useContext, useEffect, useState } from 'react'
import { supabase, updateProfile } from '../../APIClients/supabaseClient'

import BasicPage from '../../components/layouts/BasicPage'
import ContactForm, { Fields } from './ContactForm';
import { cvent, admissionItems } from '../../APIClients/cventClient';
import { PayPalStep } from './PayPalStep';
import { ProfileContext, ContextType as ProfileContextType } from '../../contexts/ProfileContext';
import { Confirmation } from './Confirmation';
import { MultiStepForm } from '../../components/organisms/MultiStepForm';

export type CventContactInfo = {
  firstName: string,
  lastName: string,
  email: string,
  company: string,
  title: string,
  id: string
}

export default function RegisterAttendee() {
  const [activeStep, setActiveStep] = useState(0);
  const [cventToken, setCventToken] = useState('');
  const [profile, setProfile] = useContext(ProfileContext) as ProfileContextType;

  useEffect(() => {
    const cventInit = async () => {
      const accessToken = await cvent.fetchToken();
      setCventToken(accessToken);
    }
    cventInit();
  }, [])

  useEffect(() => {
    if (profile) {
      console.log("Existing User Found")
      setActiveStep(1);
    }
  }, [profile])

  const handleSignUp = async (fields: Fields) => {
    const { firstName, lastName, orgName, title, email, password } = fields;
    const { session, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error

    const contact = await cvent.createContact(cventToken, {
      firstName,
      lastName,
      email,
      company: orgName,
      title
    })

    // No need to wait for this async call to finish
    addAttendee(contact, admissionItems.free.id)

    const updatedProfile = await updateProfile(session, fields);
    setProfile(updatedProfile)
  }

  const addAttendee = async (contact: CventContactInfo, admissionItemID: string) => {
    if (contact) {
      await cvent.addAttendeeToSummit(cventToken, contact.id, admissionItemID)
    } else {
      throw new Error("Missing Cvent Contact");
    }
  }

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  }

  return (
    <BasicPage maxWidth='sm' sx={{mb: 2}}>
      <MultiStepForm
        title="Registration"
        stepNames={['Contact info', 'Payment details', 'Confirmation']}
        activeStep={activeStep}
      >
        <ContactForm onSubmit={async (fields) => {
          await handleSignUp(fields);
          nextStep();
        }} />
        <PayPalStep onSubmit={() => {
          nextStep();
        }} />
        <Confirmation />

      </MultiStepForm>
    </BasicPage>

  )
}