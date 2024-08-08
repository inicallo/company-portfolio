import React from 'react'
import LoginID from './login/page'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CA Studio | Login",
    description: "Log in to your CAStudio account to manage your photography projects, view your portfolio, and connect with top photographers worldwide.",
};

const UsersLogin = () => {
  return (
    <section className="relative pt-20 bg-slate-100">
    <div>
        <LoginID />
    </div>
  </section>
  )
}

export default UsersLogin