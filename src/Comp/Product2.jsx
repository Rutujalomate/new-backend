import React from 'react'
import "./Product2.css";

const Product2 = ({image1,image2, image3,image4,title1,title2,title3,title4}) => {
  return (
    <div>
<div className="game"><h2>Shop by Category

</h2></div>
<div>
    <div className="product2">
    <div >
 <img src={image1} alt="No" className='image' />
 <p > {title1}</p>

 
  </div>
    <div>
 <img src={image2} alt="No" className='image'/>
 <p>{title2}</p>

  </div>
    <div>
 <img src={image3} alt="No" className='image'/>
 <p>{title3}</p>

  </div>
  <div>
 <img src={image4} alt="No" className='image'/>
 <p>{title4}</p>

  </div>
  





 </div>

 
      </div>

    </div>
  )
}

export default Product2