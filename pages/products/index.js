function ProductList({ products }) {
  console.log(products);
  return (
    <div>
      <h1>Product List Page</h1>

      {products.map((product) => {
        return (
          <div key={product._id}>
            <h3>
              Product Id: {product.productId} \\ Type : {product.productType}
            </h3>
            <h4>Title : {product.title}</h4>
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

  return {
    props: {
      products: products.result,
    },
  };
}
