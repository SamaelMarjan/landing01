import React from 'react';

import img2 from '../assets/pic2.png';

const About = () => {
  return (
    <>
    <div id='about'>
      <div className='w-[80%] m-auto h-[600px] md:h-[650px]  mt-[100px] flex flex-col'>
        <div className='md:mb-4'>
          <h1 className='text-center text-green-500'>About</h1>
        </div>
        <div className='flex md:w-[100%] text-white'>
          <div className='md:w-[50%] md:h-[320px]'>
            <img className='md:w-[100%] md:h-[100%]' src={img2} alt='/' />
          </div>
          <div className='md:w-[50%] md:h-[320px] md:mb-4'>
            <h2 className='text-2xl font-bold'>We Are <span className='text-[#FF5300]'>Making</span>
                <span className='block'><span className='text-[#FF5300]'>Ideas Better</span> For Everyone</span>
            </h2>
            <p className='md:mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.

              <br/>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.
            </p>
            <button className='bg-[#FF5300] p-2 rounded md:mt-4'><a href='#contact'>Contact Us</a></button>
          </div>
        </div>
        <div className='flex flex-nowrap items-center justify-center gap-4'>
          <div className='md:w-[270px] md:h-[200px] bg-[#242526]'></div>
          <div className='md:w-[270px] md:h-[200px] bg-[#242526]'></div>
          <div className='md:w-[270px] md:h-[200px] bg-[#242526]'></div>
          <div className='md:w-[270px] md:h-[200px] bg-[#242526]'></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;