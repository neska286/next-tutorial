import Link from 'next/link'
import React, { FC } from 'react'
import styles from './button.module.css'

interface Props {
   text:string,
   url:string
  }

const Button: FC<Props> = ({text,url}) => {
  return (
    <Link href={url}>
        <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button