import Link from "next/link";

function PostList({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <h4>
                {post.id} {post.title}
              </h4>
            </Link>
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
  const data = await postRes.json();

  return {
    props: { posts: data.slice(0, 4) },
  };
}
