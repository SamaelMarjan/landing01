import React from 'react';

const Navbar = () => {
  return (
    <>
        <div className='fixed z-50 bg-[#3A3B3C] w-[100%] h-[50px] md:h-[80px] shadow-md'>
            <div className='flex justify-between w-[85%] h-[100%] m-auto items-center'>
                <h2 className='font-bold text-white text-xl md:text-3xl lg:4xl'>
                    <a href="#hero">
                        <span className='text-[#FF5300]'>Digi</span>land
                    </a>
                </h2>
                <div className='flex'>
                    <ul className='md:flex gap-4 text-white hidden md:visible'>
                        <li>
                            <a href='#hero'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About Us</a>
                        </li>
                        <li>
                            <a href='#work'>Our Work</a>
                        </li>
                        <li>
                            <a href='#clients'>Clients</a>
                        </li>
                        <li>
                            <a href='#blog'>Our Blog</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='fixed right-0 '>
            <h1 className=' text-white mt-[50px] md:mt-[100px] '>social</h1>
        </div>
    </>
  );
}

export default Navbar;