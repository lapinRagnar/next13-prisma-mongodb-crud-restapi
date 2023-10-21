import Link from "next/link"

const getPostsData = async () => {
    
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  await new Promise(resolve => setTimeout(resolve, 2000)) // simulate a network latency

  return res.json()
}
const getUsersData = async () => {
    
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  await new Promise(resolve => setTimeout(resolve, 2000)) // simulate a network latency

  return res.json()
}

const Post = async () => {

  // const posts = await getPostsData()
  const [posts, users] = await Promise.all([getPostsData(), getUsersData()])

  return (
    <div>
      <h1 className="text-4xl mb-10">Post Page</h1>

      <h2 className="text-2xl">Users</h2>
      {
        users.map(user => (
          <p className="text-blue-800 " key={user.id}>{user.name}</p>
        ))
      }

      <ul className="flex flex-col gap-5">
        {
          posts.map(post => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <li className="bg-gray-100 p-5 cursor-pointer rounded-lg">
                <h4 className="text-2xl font-bold">{post.title}</h4>
                <p>{post.body}</p>
              </li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default Post