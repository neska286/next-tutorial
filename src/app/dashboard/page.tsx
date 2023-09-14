'use client'
import { PostData, PostState } from "@/types/Post";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from 'next/navigation'
import styles from './dashboard.module.css'
import Image from "next/image";


const Dashboard = () => {
  const session  = useSession()
  // const initialState = {
  //   _id: "",
  //   desc: "",
  //   img: "",
  //   content:"",
  //   title:"",
  //   username:session?.data?.user.name
  // };
  const router = useRouter();
  // const [state,setState]=useState<PostData>(initialState)
  //old way to fetch data
  // const [data, setData] = useState<PostState>();
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const res = await fetch("http://localhost:3000/api/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);

  
  // New Way To Fetch data
  //get all the posts
  const url = `/api/posts?username=${session?.data?.user.name}`;
  const fetcher =(url:string)=>fetch(url).then((res)=>res.json())

  const {data,mutate,error,isLoading}= useSWR(url,fetcher)
 
  console.log('session',session)
  console.log('data',data)

  if(session.status === 'loading'){
    return <p>Loading.....</p>
  }
  if(session.status === 'unauthenticated'){
    router?.push("/dashboard/login");
  }
  // function handleInput(event: ChangeEvent< HTMLInputElement | HTMLTextAreaElement>){
  //   setState((prevState) => ({
  //       ...prevState,
  //       [event.target.name]: event.target.value,
  //     }));
  // }
//  async  function handleSubmit(ev: FormEvent<HTMLFormElement>){
//     ev.preventDefault();
//     try{
//       const res = await fetch("/api/posts",{
//         method:"POST",
//         body: JSON.stringify(state)
//       })
//       mutate()
//     }catch(err){
//       console.log('error')
//     }
//   }


const handleSubmit = async (e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const desc = e.target[1].value;
  const img = e.target[2].value;
  const content = e.target[3].value;

  try {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        img,
        content,
        username: session.data.user.name,
      }),
    });
    mutate();
    e.target.reset()
  } catch (err) {
    console.log(err);
  }
};


  // console.log("data", data);
 if(session.status === 'authenticated'){
  return(
    <div className={styles.container}>
    <div className={styles.posts}>
      {isLoading
        ? "loading"
        : data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt="" width={200} height={100} />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                className={styles.delete}
                // onClick={() => handleDelete(post._id)}
              >
                X
              </span>
            </div>
          ))}
   
    </div>
    <form  onSubmit={handleSubmit} className={styles.new} >
      <h1>Add New Post</h1>
      <input type="text" placeholder="Title" className={styles.input}
      name="title"
      />
      <input type="text" placeholder="Desc" className={styles.input}
       name="desc" />
      <input type="text" placeholder="Image" className={styles.input}
       name="img"
       />
      <textarea
        placeholder="Content"
        className={styles.textArea}
        name="content"
       
      ></textarea>
      <button className={styles.button}>Send</button>
    </form>
  </div>
  );
 }
  
};

export default Dashboard;
