import React from 'react';
// import Tilt from 'react-tilt'; 
import shopping from './shopping-bag.png';

const CartLogo = () => {
  return (
    <div className='ma4 mt0'>
        <div className="logo">
          <img style={{paddingTop: '5px'}} alt='logo' src={shopping}/>
        </div>
    </div>
  );
}

export default CartLogo;