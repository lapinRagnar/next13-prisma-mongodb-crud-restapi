import prisma from '../../../libs/prismadb'

import { NextResponse } from 'next/server'


export const GET = async (request, {params}) => {
  
  try {

    const { id } = params


    const post = await prisma.post.findUnique({
      where : {
        id: id
      }
    })

    if (!post) {
      return NextResponse.json({message: 'Post not found, page nont trouvé!'}, { status: 404 })
    }

    return NextResponse.json(post)

  } catch (err) {
    return NextResponse.json({message: 'GET error', err}, { status: 500 })
  }
}


export const PATCH = async (request, {params}) => {
  
  try {
    
    const body = await request.json()
    const { title, description } = body

    const { id } = params

    console.log("mon id est : ", id)

    const updatePost = await prisma.post.update({
      where: {
        id: id
      },
      data: {
        title,
        description
      }  
    })

    if (!updatePost) {
      return NextResponse.json({message: 'Post not found, page nont trouvé!'}, { status: 404 })
    }

    return NextResponse.json(updatePost)

  } catch (err) {
    return NextResponse.json({message: 'UPDATE error', err}, { status: 500 })
  }
}


export const DELETE = async (request, {params}) => {
  
  try {

    const { id } = params


    await prisma.post.delete({
      where : {
        id: id
      }
    })

    return NextResponse.json("post bien supprime !")

  } catch (err) {
    return NextResponse.json({message: 'DELETE error', err}, { status: 500 })
  }
}



