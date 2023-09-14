/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/Button'
import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Information',
  description: 'This is the Description',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
     <ContactForm/>
      </div>
    </div>
  )
}

export default Contact