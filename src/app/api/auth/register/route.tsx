import User from "@/model/User"
import { UserData } from "@/types/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export const POST = async(request:any)=>{
  try{
    const {name,email,password}:UserData = await request.json()
    await connect()
    const hasedPassword = await bcrypt.hash(password,5)
    const newUser = new User({
       name,
       email,
       password: hasedPassword
    })
    await newUser.save();
    return new NextResponse("user has beeen created",{
        status:201
    })
  }catch(err){
    return new NextResponse("error in adding user",{
        status:500
    })
  }

}