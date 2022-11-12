import React from 'react'
import  './Product3.css'
const Product3 = ({image,text,title}) => {
  return (
<div>

<div>
    <div className="product3">
    <div >
<h2 className='tex'>{text}
</h2>
 <img src={image} alt="No" className='image1'  />
 
<p className='titl'>{title}</p>
 
  </div>
   
 </div>

 
      </div>

    </div>
  )
}

export default Product3