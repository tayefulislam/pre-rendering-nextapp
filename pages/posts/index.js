function PostList({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h4>
              {post.id} {post.title}
            </h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postRes.json();
  console.log(posts);
  return {
    props: { posts },
  };
}
