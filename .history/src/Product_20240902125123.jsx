import React from 'react'
import "./css/product.css";
// import Product from './p2.png'
function Product({ productsList, addToCart , removeFromCart}) {



    return (
      <div className='products_wrap'>
{
productsList.map((items) => {

return <div key={items.id} className="product">
              <img src={items.image.url} alt={items.name} />
              <h2>{items.name}</h2>
              <p>{items.price.formatted_with_symbol}</p>
              <button onClick={()=>  addToCart(items.id, 1)}> Add to Cart</button>
            </div>


    })
    
  }

</div>



    )
  }

export default Product
