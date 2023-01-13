function ProductByBrand({ products, brand }) {
  return (
    <div>
      <h1>Products By Brand : {brand}</h1>

      {products
        .filter((product) => product.brand === brand)
        .map((product) => {
          return (
            <>
              <div>
                <h1>Product Name : {product.title.slice(0, 40)}</h1>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default ProductByBrand;

export async function getServerSideProps(context) {
  const { params } = context;
  const brand = params?.brand;
  console.log(brand);

  const productsRes = await fetch(
    "https://chibapcmartdemo.onrender.com/api/v1/products"
  );
  const products = await productsRes.json();

  return {
    props: {
      products: products.result,
      brand,
    },
  };
}
