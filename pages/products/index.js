function ProductList({ products }) {
  console.log(products);
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <h1>{product.title}</h1>
            <h3>{product.productType}</h3>
            <h4>{product.discountPrice}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;

export async function getServerSideProps() {
  const productsRes = await fetch(
    "https://chibapcmartdemo.onrender.com/api/v1/products"
  );
  const products = await productsRes.json();

  // console.log(products);

  return {
    props: {
      products: products.result,
    },
  };
}
