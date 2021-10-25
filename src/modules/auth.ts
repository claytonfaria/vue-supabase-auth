import { UserModule } from '~/types'
import { supabase } from '../logic/supabase'

export const install: UserModule = ({ router }) => {
  console.log('Installing auth module')
  supabase.auth.onAuthStateChange((_, session) => {
    if (session)
      router.push('/')

    else
      router.push('/login')
  })
}
