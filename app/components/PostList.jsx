import Post from "./Post"

const PostList = ({ posts }) => {

  return (
    <ul>
      { posts &&
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </ul>
  )
}

export default PostList