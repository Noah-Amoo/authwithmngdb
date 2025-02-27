import { auth } from '@/auth'
import Link from 'next/link'
import React from 'react'
import Logout from './Logout'
import Image from 'next/image'

export default async function Navbar() {
  const session = await auth()
  return (
    <nav className='border-b bg-background w-full flex items-center'>
        <div className='flex w-full items-center justify-between my-4'>
          <Link className='font-bold' href="/">Home</Link>

          <div className='flex items-center gap-x-5'>
            <Link href="/middleware">Middleware</Link>
            <Link href="/server">Server</Link>
          </div>

          <div className='flex items-center gap-x-5'>
            {!session?.user ? (
            <Link href="sign-in">
              <div className='bg-blue-600 text-white text-sm px-4 py-2 rounded-sm'>Login</div>
            </Link>
            ) : (
              <>
                <div className='flex items-center gap-x-2 text-sm'>
                  {session?.user?.name}
                  {session?.user?.image && (
                    <Image
                      src={session?.user?.image || ''}
                      alt='user'
                      width={30}
                      height={30}
                      className='rounded-full'
                    />
                  )} 
                </div>
                <Logout />
              </>
            )}
          </div>
        </div>
    </nav>
  )
}
