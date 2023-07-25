'use client'
import React from 'react'
import Button from '@/components/Button';
import Image from 'next/image'
import styles from './category.module.css'
import { useRouter } from 'next/navigation'
import { items } from "./data.ts";
import { notFound } from "next/navigation";
const getData = (cat) => {
    // console.log('items',items['applications'])
    const data = items[cat];
  
    if (data) {
      return data;
    }
  
    return notFound();
  };

  const externaImageLoader = ( {src: string }) =>
  `https://images.pexels.com/${src}`;
  
const Category = ({params}) => {
    // const router = useRouter()
    // // const { userid } = router.query
    // console.log('router',router)
    // console.log('params',params)
    const data = getData(params.category);
  return (
    <div className={styles.container}>
    <h1 className={styles.catTitle}>{params.category}</h1>

    {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category