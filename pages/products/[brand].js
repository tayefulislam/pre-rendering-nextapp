function ProductByBrand({ products, brand, req }) {
  return (
    <div>
      {/* <h1>User Name : {req.headers.cookie.title}</h1> */}
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
  const { params, req, res, query } = context;

  // access cookie
  //   console.log(req.headers.cookie.title);

  const brand = params?.brand;
  console.log(query);

  const productsRes = await fetch(
    "https://chibapcmartdemo.onrender.com/api/v1/products"
  );
  const products = await productsRes.json();

  // set Cookie and access cookie
  //   res.setHeader("Set-Cookie", [`title=${products.result[0].title}`]);

  return {
    props: {
      products: products.result,
      brand,
    },
  };
}
