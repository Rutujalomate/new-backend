import React from "react";
import "./Product.css";
import ProductItem from '../products/ProductItem'

function Product({image1,image2, image3,image4,title1,title2,title3,title4}) {
 
  return (
    
    <div>
      <div className="game"><h2>Gaming accessories
</h2>
</div>

    <div className="product">

    <div >
 <img src={image1} alt="No" />
 <p > {title1}</p>

 
  </div>
    <div>
 <img src={image2} alt="No" />
 <p>{title2}</p>

  </div>
    <div>
 <img src={image3} alt="No" />
 <p>{title3}</p>

  </div>
  <div>
 <img src={image4} alt="No" />
 <p>{title4}</p>

  </div>
  
<div><p>see more</p></div>




 </div>

 
      </div>
  );
}

export default Product;