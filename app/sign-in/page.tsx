import LoginGithub from '@/components/LoginGithub'
import React from 'react'

export default function SignIn() {
  return (
    <div className='w-full flex mt-20 justify-center'>
        <section className='flex flex-col w-[400px]'>
            <h1 className='text-3xl text-center font-bold mb-6'>Sign In</h1>
            {/* TODO - Sign In Form */}
            <LoginGithub />
        </section>
    </div>
  )
}
