import Post from "@/model/Post";
import { NextResponse } from "next/server";
import connect from "@/utils/db";


export const GET = async (request: any) => {
    // return new NextResponse("It Works", { status: 200 });
    const url = new URL(request.url);

  const username = url.searchParams.get("username");
      
        try {
          await connect();
          const posts = await Post.find(username && { username });
          return new NextResponse(JSON.stringify(posts), { status: 200 });
        } catch (err) {
          return new NextResponse("Database Error", { status: 500 });
        }
  };


  export const POST = async(request:any)=>{
    try{
      await connect()
      const body  = await request.json()
      const newPost  = new Post(body)
      await newPost.save()
      return new NextResponse("post has beeen created",{
        status:201
    })
    }catch(error){
      return new NextResponse("error in Creating Post",{
        status:500
    })
    }

  }

 
  

  