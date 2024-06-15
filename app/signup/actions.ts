'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        phone_number: formData.get('phone_number') as string,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  };
  console.log(data)
  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log("error: ", error.message)
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}