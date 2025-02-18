import Link from 'next/link'
import React from 'react'

const NavItem = () => {
  return (
    <>
       <ul className='flex gap-x-10 py-5'>
            <li>
              <Link href={"/"} >Home</Link>
            </li>
            <li>
              Shop
            </li>
            <li>
              Blogs
            </li>
            <li>
              <Link href={"/about-us"} >About us</Link>
            </li>
            <li>
              <Link href={"/contact-us"} >Contact us</Link>
            </li>
          </ul>
    </>
  )
}

export default NavItem
