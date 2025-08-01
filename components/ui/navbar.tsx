import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.svg'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pinter">
                <Image src={logo} alt='Logo' width={46} height={44} />
            </div>
        </Link>
        <div className='flex items-center  gap-8'>
             <NavItems />
             <p>Sign In</p>
        </div>
    </nav>
  )
}

export default Navbar
