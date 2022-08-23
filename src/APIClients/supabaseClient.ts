import { createClient, Session } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error("Missing Supabase URL")
}
if (!supabaseAnonKey) {
  throw new Error("Missing Supabase Anon Key")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getProfile = async (session: Session) => {
  try {
    const { user } = session
    if (!user) throw new Error("Missing User")

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`*`)
      .eq('id', user.id)
      .single()

    // Ignore missing profiles
    if (error && status !== 406) {
      throw error
    }

    return data;
  } catch (error) {
    console.log(error)
  }
}

export type UpdateProfileProps = {
  firstName?: string,
  lastName?: string,
  orgName?: string,
  title?: string,
  email?: string,
  cventContactID?: string
}

export type SupabaseProfile = {
  'first_name'?: string,
  'last_name'?: string,
  'org'?: string,
  'title'?: string,
  'email'?: string,
  'cvent_contact_id'?: string
}

type NameMap = {
  [key in keyof UpdateProfileProps]: keyof SupabaseProfile;
}

const profilePropsNameMap: NameMap = {
  firstName: 'first_name',
  lastName: 'last_name',
  orgName: 'org',
  title: 'title',
  email: 'email',
  cventContactID: 'cvent_contact_id'
}

type Update = {
  [key: string]: any,
  updated_at: Date
}

export const updateProfile = async (session: Session | null, props: UpdateProfileProps): Promise<SupabaseProfile | null> => {
  if (!session) throw new Error("Missing session")
  const { user } = session
  if (!user) throw new Error("Missing User")

  const updates: Update = {
    updated_at: new Date(),
    id: user.id
  }

  Object.entries(profilePropsNameMap).forEach(([supabaseColumn, propName]) => {
    updates[supabaseColumn] = props[propName as keyof UpdateProfileProps];
  })

  const { data, error } = await supabase.from('profiles').upsert(updates);
  if (error) {
    throw error
  }
  return (data as SupabaseProfile) || null;
}