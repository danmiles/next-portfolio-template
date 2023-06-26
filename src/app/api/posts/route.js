import { NextResponse } from "next/server";
import connectDB from "@/utils/database";
import Post from "@/models/Post";

export const GET = async (request) => {
 try {
    await connectDB();
    const posts = await Post.find();
    return new NextResponse(posts);
 }
  catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }

    
};


