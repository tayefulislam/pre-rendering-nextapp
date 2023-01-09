function Users({ data }) {
  return (
    <div>
      <h1>Home Pre Render All Product</h1>

      {data.result.map((product) => {
        return (
          <div key={product._id}>
            <h4>{product.title}</h4>
            <h4>{product.slug}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch(
    "https://chibapcmartdemo.onrender.com/api/v1/products"
  );
  const data = await res.json();

  const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await userRes.json();
  console.log(data);

  return {
    props: {
      data,
      users,
    },
  };
}
