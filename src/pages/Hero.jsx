import React from 'react';

import img1 from '../assets/pc.svg';

const Hero = () => {
  return (
    <>
    <div id='hero'>
        <div className='mt-[50px] md:mt-[80px] flex bg-[#242526] w-[100%] h-[500px] md:h-[650px]'>
            <div className='w-[85%] h-[100%] m-auto mt-[50px] md:mt-[100px] flex justify-center'>
                <div>
                    <h1 className='w-[200px] md:w-[440px] h-[100px] md:h-[150px] text-white text-xl md:text-4xl lg:text-5xl font-bold'>
                        We Are The Best <span className='block'><span className=' text-[#FF5300]'>Digital Agency</span> for </span>
                        business
                    </h1>
                    <p className='text-white w-[220px] md:w-[493px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='bg-[#FF5300] rounded mt-4 md:mt-6 p-2 md:p-2 text-white shadow-lg'><a href='#about'>Contact Us</a></button>
                </div>
                <div>
                    <img src={img1} alt='/' />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Hero;