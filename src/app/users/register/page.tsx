import React from 'react'
import { Metadata } from 'next';
import Register from './Register';

export const metadata: Metadata = {
    title: "CA Studio | Register",
    description: "Join CAStudio and connect with our global network of professional photographers. Register now to access tailored photography services for your business.",
};

const UsersLogin = () => {
  return (
    <section className="relative pt-20 bg-slate-100">
    <div>
        <Register />
    </div>
  </section>
  )
}

export default UsersLogin