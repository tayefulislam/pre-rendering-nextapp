function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await postsRes.json();

  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    // ],
    paths,
    fallback: false,
  };
}

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
