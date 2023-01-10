// import { useRouter } from "next/router";

function Post({ post }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  // const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");

  // const data = await postsRes.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   };
  // });

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
      { params: { postId: "4" } },
    ],

    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await postRes.json();

  if (!post.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating Page for /posts/${params.postId}`);
  return {
    props: {
      post,
    },
  };
}
