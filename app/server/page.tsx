import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Server() {
    const session = await auth()
    if (!session?.user) {
        // return <div>Not logged in</div>
        redirect('/')
    }
  return (
    <main className="flex h-full items-center justify-center flex-col gap-2">
      <h1 className='text-3xl'>Server page</h1>
      <p className='text-lg'>{session?.user?.email}</p>
    </main>
  )
}
