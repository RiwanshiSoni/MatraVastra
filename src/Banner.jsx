// Corrected Banner.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./css/banner.css";
import Heros1 from "./banner4.png"; // Ensure this path matches the actual file name
import Heros2 from "./p3.png";
import Heros3 from "./banner4.png";
import Heros4 from "./banner4.png";
import Heros5 from "./banner4.png";

// const SlideBanner = () => {
//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Slider  {...settings}>
//       <div>
//       <img src={Heros1} />
//       </div>
//       <div>
//       <img src={Heros2} />
//       </div>
//       <div>
//       <img src={Heros3} />

// </div>
// <div>
// <img src={Heros4} />

// </div>
// <div>
// <img src={Heros5} />

// </div>
      
//     </Slider>

    
//   )


// }

// export default SlideBanner


function Banner() {
  return (
  <>
    <div  className="banner">
      <img src={Heros1} />
      </div>
  </>
)
}


export default Banner
