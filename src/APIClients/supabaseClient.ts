import { createClient, Session } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if(!supabaseUrl){
    throw new Error("Missing Supabase URL")
}
if(!supabaseAnonKey){
    throw new Error("Missing Supabase Anon Key")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getProfile = async (session: Session) => {
    try {
      const { user } = session
      if(!user) throw new Error("Missing User")

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`*`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      return data;
    } catch (error) {
      console.log(error)
    }
  }