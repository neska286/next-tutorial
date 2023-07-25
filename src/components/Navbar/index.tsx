import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle'

const pages = [
    {id:1,name:"Home",path:"/"},
    {id:2,name:"Portfolio",path:"/portfolio"},
    {id:3,name:"Blog",path:"/blog"},
    {id:4,name:"About",path:"/about"},
    {id:5,name:"Contact",path:"/contact"},
    {id:6,name:"Dashboard",path:"/dashboard"},
]
const NavBar = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">
          Logo
          </Link>
        <div className={styles.links}>
          <DarkModeToggle/>
        {pages?.map((page)=>(
        <Link className="" key={page.id} href={page.path}>
          {page.name}
        </Link>
        ))}
         <button className={styles.logout}>
            Logout
          </button>
         </div>
    </div>
  )
}

export default NavBar