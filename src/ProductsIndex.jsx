export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products</h1>
      <p>The name is</p>
      {props.products.map((products) => (
        <div key={products.id} className="products-index ">
          <h2>{products.productName}</h2>
          <p>{products.description}</p>
          <img src={products.image_url} alt="" />
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}
