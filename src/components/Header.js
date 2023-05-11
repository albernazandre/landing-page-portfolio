import React from 'react';

//images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between 
        items-center mb-10'>
          { /* Logo */ }
          <a href='#'>
            <img src={Logo} alt='myLogo' className='w-18 h-10'/>
          </a>
          <button className='btn btn-lg sm'>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
