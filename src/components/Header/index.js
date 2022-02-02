import React from 'react';
import me from "assets/images/Moi.jpg";

function Header() {
  return <div className='h-16 w-full flex justify-between items-center px-10'>
      <div>Matthieu Wandolski</div>
      <img src={me} alt='Wandolski Matthieu Web developer' className='rounded-full h-12 w-12'/>
  </div>;
}

export default Header;
