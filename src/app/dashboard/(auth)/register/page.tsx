'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './register.module.css'
import Link from 'next/link'
import { UserData } from '@/types/User'
import { useRouter } from 'next/navigation'




const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  }
const [state,setState] = useState<UserData>(initialState)
const [error, setError] = useState()
const router = useRouter();
const [isClient, setIsClient] = useState(false)

 // Use useEffect to ensure this component runs on the client side
 useEffect(() => {
  // Add any client-side logic or side effects here
  setIsClient(true)
}, []);

function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    setState((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }))
  }

  const handleSubmit =  async (ev: FormEvent<HTMLFormElement>)=>{
    ev.preventDefault()
    try{
    const resp = await fetch("/api/auth/register",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state)
    })
    resp.status === 201 && router.push('/dashboard/login?success=Account has been created')
    }catch(err){
    console.log(err)
    }
}

  return (
    <>
    {isClient && (
    <section className={styles.container}>
    <h1 className={styles.title}>Create an Account</h1>
    <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
    <div>
    <form onSubmit={handleSubmit} className={styles.form}>
    <input
      type="text"
      placeholder="Username"
      required
      className={styles.input}
      name='name'
      onChange={handleInputChange}
      value={state.name}
    />
    <input
      type="text"
      placeholder="Email"
      required
      className={styles.input}
      name='email'
      onChange={handleInputChange}
      value={state.email}
    />
    <input
      type="password"
      placeholder="Password"
      required
      className={styles.input}
      name='password'
      onChange={handleInputChange}
      value={state.password}
    />
    <button className={styles.button}>Register</button>
    {error && "Something went wrong!"}
  </form>
  </div>
    <span className={styles.or}>- OR -</span>
    <Link className={styles.link} href="/dashboard/login">
      Login with an existing account
    </Link>
  </section>
  )}
  </>
  )
}

export default Register