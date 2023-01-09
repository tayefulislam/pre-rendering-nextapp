function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export default Post;

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await postRes.json();
  return {
    props: {
      post,
    },
  };
}
