'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { UserData } from '@/types/User'
import { useRouter } from 'next/navigation'
import styles from '../../app/dashboard/(auth)/register/register.module.css'

const RegisterForm = () => {
    const initialState = {
        name: '',
        email: '',
        password: '',
      }
    const [state,setState] = useState<UserData>(initialState)
    const [error, setError] = useState()
    const router = useRouter();


 
    function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
          ...prevState,
          [ev.target.name]: ev.target.value
        }))
      }

      const handleSubmit =  async (ev: FormEvent<HTMLFormElement>)=>{
        ev.preventDefault()
        console.log('clicked')
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
console.log('state',state)
  return (
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
  )
}

export default RegisterForm

