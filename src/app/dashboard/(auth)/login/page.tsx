"use client"
import { signIn, useSession } from 'next-auth/react'
import styles from './login.module.css'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState  } from 'react'
import { LoginData } from '@/types/User'
import { useRouter } from 'next/navigation'

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  }
  const [state, setState] = useState<LoginData>(initialState)
  const router = useRouter();
  const session  = useSession()
 
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    setState((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }))
  }
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // console.log('clicked');
    signIn("credentials", state);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
        <button className={styles.button}>Login</button>
        {/* {error && error} */}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
      </div>
  )
}

export default Login