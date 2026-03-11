'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'Admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin'

export async function login(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set('admin_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    redirect('/admin/upload')
  }

  return { error: 'Invalid credentials' }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
  redirect('/login')
}

export async function checkAuth() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_auth')?.value === 'true'
}
