
const Post = ({post}) => {
  return (
    <li className="p-3 my-5 bg-slate-400 rounded-md" key={post.id}>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.description}</p>
    </li>
  )
}

export default Post