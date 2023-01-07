import React from 'react';
// import Tilt from 'react-tilt'; 
import wolf from './wolf.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <div className="logo">
          <img style={{paddingTop: '5px'}} alt='logo' src={wolf}/>
        </div>
    </div>
  );
}

export default Logo;