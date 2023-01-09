import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home Pre Render All Product</h1>
      <Link href="/user">Users</Link> <br></br>
      <Link href="/posts">Posts</Link>
      {/* {data.result.map((product) => {
        return (
          <div key={product._id}>
            <h4>{product.title}</h4>
            <h4>{product.slug}</h4>
          </div>
        );
      })} */}
    </div>
  );
}

export default Home;

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:5000/api/v1/products");
//   const data = await res.json();

//   const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await userRes.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//       users,
//     },
//   };
// }
