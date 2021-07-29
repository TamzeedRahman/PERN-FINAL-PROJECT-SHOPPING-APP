function Product({ ...productItem }) {
    console.log(productItem)
    return (
      <div className="item">
        <a href={`/products/${productItem.id}`}>
            <img src={productItem.url} alt='item' />
            <h4>{productItem.name}</h4>
            <h4>${productItem.price}</h4>
        </a>
      </div>
    );
  }
  
  export default Product;