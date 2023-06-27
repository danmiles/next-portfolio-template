import { NextResponse } from 'next/server';
import connectDB from '@/utils/database';
import Post from '@/models/Post';

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find({});
    return NextResponse.json(posts);
  }
  catch (err) {
    return NextResponse.error(err);
  }  
};
