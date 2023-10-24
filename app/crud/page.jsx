"use client"

import AddPost from "../components/AddPost"
import PostList from "../components/PostList"

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store'})

  if (!res.ok) {
    throw new Error('echec defetch data')
  }

  return res.json()
}

const Crud = async () => {

  const posts = await getData()

  console.log(posts)

  return (
    <div className="max-w-4xl mx-auto mt-4 ">
      <div className="my-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">To do list</h1>
        <AddPost posts={posts}/>
      </div>
      <PostList posts={posts}/>
    </div>
  )
}

export default Crud