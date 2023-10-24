import prisma from '../../libs/prismadb'

import { NextResponse } from 'next/server'

export const POST = async (request, res) => {
  
  try {
    
    const body = await request.json()
    const { title, description } = body

    const newPost = await prisma.post.create({
      data: {
        title,
        description
      }  
    })

    return NextResponse.json(newPost)

  } catch (err) {
    return NextResponse.json({message: 'Post error', err}, { status: 500 })
  }
}

// l'url est http://localhost:3000/api/posts

export const GET = async () => {
  
  try {

    const posts = await prisma.post.findMany()

    return NextResponse.json(posts)

  } catch (err) {
    return NextResponse.json({message: 'GET error', err}, { status: 500 })
  }
}




