import React from 'react';
import Leaderboard from "./leaderboard00.png";
import CheckoutProductImg from './p2.png';
import './css/shopping.css';

function ShoppingCart({cart, removeFromCart}) {



 // Calculate subtotal
  const calculateSubtotal = () => {
     return cart?.line_items?.reduce((acc, item) => acc + item.price.raw * item.quantity, 0).toFixed(2);
       };





  console.log("Your cart ", cart);    return (
    <div className='checkout'>
      <div className="checkout_left">
        <img src={Leaderboard} className='checkout_ad' alt="Leaderboard Ad" />
        <div>
          <h3 className='h3'>Hello Tanya</h3>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          


{

  
  cart?.line_items?.map(item=>{
    // console.log(cart); // Check the structure of cart before rendering
    // console.log(item)





return   <div className="checkoutProduct"   key={item.id}>
<img src={item.image?.url} className="checkoutProduct_img" alt="Product" />

<div className="checkoutProduct_info">
  <p className='checkoutProduct_title'>{item.name}</p>
  <p className='checkoutProduct_price'>
    <strong>{item.price.formatted_with_symbol} * {item.quantity} = ₹ {(item.price.raw * item.quantity).toFixed(2)}</strong> 
  </p>
  <button>Remove From Basket</button>
</div>
</div>
  })
}


          {/* <div className="checkoutProduct">
            <img src={CheckoutProductImg} className="checkoutProduct_img" alt="Product" />
            <div className="checkoutProduct_info">
              <p className='checkoutProduct_title'>Product Name</p>
              <p className='checkoutProduct_price'>
                <strong>₹600.00 * 1 = ₹ 600</strong> 
              </p>
              <button>Remove From Basket</button>
            </div>
          </div> */}
        
        </div>
      </div>
      {/* <div className="checkout_right">
        <div className="subtotal">
          <p  className='p'>Subtotal (2 items): <strong>₹1,299.00</strong></p>
          <small className="subtotal_gift">
            <input type="checkbox"/> This order contains a gift
          </small>
          
        <div className="subtotalButton">
          <button className='proceedToCheckOutButton'>Proceed to Checkout</button>
          </div>
        </div>
      </div> */}




      {/* ******************************************************************* */}



      <div className="checkout_right">
     <div className="subtotal">
       <p className='p'>
          Subtotal ({cart?.total_items || 0} items): 
           <strong> ₹{calculateSubtotal()}</strong>
         </p>
         <small className="subtotal_gift">
          <input type="checkbox" /> This order contains a gift
       </small>
        <div className="subtotalButton">
           <button className='proceedToCheckOutButton'>Proceed to Checkout</button>
         </div>
      </div>
       </div>


    </div>
  );
}

export default ShoppingCart;


// ***************************************************************





// import React from 'react';
// import Leaderboard from "./leaderboard00.png";
// import './css/shopping.css';

// function ShoppingCart({cart}) {

//   // Calculate subtotal
//   const calculateSubtotal = () => {
//     return cart?.line_items?.reduce((acc, item) => acc + item.price.raw * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className='checkout'>
//       <div className="checkout_left">
//         <img src={Leaderboard} className='checkout_ad' alt="Leaderboard Ad" />
//         <div>
//           <h3 className='h3'>Hello Tanya</h3>
//           <h2 className='checkout_title'>Your Shopping Basket</h2>

//           {/* Rendering the list of products in the cart */}
//           {cart?.line_items?.map(item => (
//             <div className="checkoutProduct" key={item.id}>
//               <img src={item.media.source} className="checkoutProduct_img" alt="Product" />
//               <div className="checkoutProduct_info">
//                 <p className='checkoutProduct_title'>{item.name}</p>
//                 <p className='checkoutProduct_price'>
//                   <strong>{item.price.formatted_with_symbol} x {item.quantity} = ₹{(item.price.raw * item.quantity).toFixed(2)}</strong> 
//                 </p>
//                 <button>Remove From Basket</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="checkout_right">
//         <div className="subtotal">
//           <p className='p'>
//             Subtotal ({cart?.total_items || 0} items): 
//             <strong> ₹{calculateSubtotal()}</strong>
//           </p>
//           <small className="subtotal_gift">
//             <input type="checkbox" /> This order contains a gift
//           </small>
//           <div className="subtotalButton">
//             <button className='proceedToCheckOutButton'>Proceed to Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingCart;



// ***********************************************************************


// import React from 'react';
// import Leaderboard from "./leaderboard00.png";
// import './css/shopping.css';

// function ShoppingCart({ cart }) {

//   // Calculate subtotal
//   const calculateSubtotal = () => {
//     return cart?.line_items?.reduce((acc, item) => acc + item.price.raw * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className='checkout'>
//       <div className="checkout_left">
//         <img src={Leaderboard} className='checkout_ad' alt="Leaderboard Ad" />
//         <div>
//           <h3 className='h3'>Hello Tanya</h3>
//           <h2 className='checkout_title'>Your Shopping Basket</h2>

//           {/* Rendering the list of products in the cart */}
//           {cart?.line_items?.map(item => (
//             <div className="checkoutProduct" key={item.id}>
//               <img src={item.media.source} className="checkoutProduct_img" alt="Product" />
//               <div className="checkoutProduct_info">
//                 <p className='checkoutProduct_title'>{item.name}</p>
//                 <p className='checkoutProduct_price'>
//                   <strong>{item.price.formatted_with_symbol} x {item.quantity} = ₹{(item.price.raw * item.quantity).toFixed(2)}</strong>
//                 </p>
//                 <button>Remove From Basket</button>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//       <div className="checkout_right">
//         <div className="subtotal">
//           <p className='p'>
//             Subtotal ({cart?.total_items || 0} items): 
//             <strong> ₹{calculateSubtotal()}</strong>
//           </p>
//           <small className="subtotal_gift">
//             <input type="checkbox" /> This order contains a gift
//           </small>
//           <div className="subtotalButton">
//             <button className='proceedToCheckOutButton'>Proceed to Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingCart;


