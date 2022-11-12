import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';





const Header = () => {
  return (
    <div className='header'>
<img 
className='header__logo'
src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="no"/>
<div className='header_search'>
    <input type="text"
    className='header_searchINPUT'
    />

<SearchIcon className="header_seararchIcon" />

</div>
<div className='header_nav'>
    <div className='header_option'>
        <span className='header_optionOne'>Hello Guest</span>
        <span className='header_optionTwo'>Sign in</span>

    </div>

    <div className='header_option'>
    <span className='header_optionOne'>Reurns</span>
   <span className='header_optionTwo'>& orders</span>
    </div>

    <div className='header_option'>
    <span className='header_optionOne'>Your</span>
    <span className='header_optionTwo'>Prime</span>
    </div>
<div className='header_BasketOption'> 
<ShoppingBasketIcon/>
<span className='header_optionTwo
 header_basketCount'>0</span>
</div>

</div>

    </div>
  )
}

export default Header