import Post from "@/model/Post";
import { NextResponse } from "next/server";
import connect from "@/utils/db";

export const GET = async (request: any,{params}:any) => {
    const { id } = params;
      
        try {
          await connect();
          const post = await Post.findById(id);
          return new NextResponse(JSON.stringify(post), { status: 200 });
        } catch (err) {
          return new NextResponse("Database Error", { status: 500 });
        }

    
  };