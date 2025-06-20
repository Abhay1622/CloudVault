import MobileNavigation from '@/components/MobileNavigation'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import React from 'react'
import { getCurrentUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import { Toaster } from '@/components/ui/toaster'

const Layout = async ( {children}: {children: React.ReactNode} ) => {
    const currentUser = await getCurrentUser();
    if (!currentUser) return redirect("/sign-in");
  return (
    <div>
         <main className="flex h-screen">
      <Sidebar {...currentUser} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser}/> <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        
        <div className="main-content">{children}</div>
      </section>
      <Toaster />
    </main>
    </div>
  )
}

export default Layout