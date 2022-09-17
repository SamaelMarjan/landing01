import React from 'react';

const Exp = () => {
  return (
    <>
    <div></div>
        <div className='md:w-[100%] md:h-[650px] text-white bg-[#242526]'>
            <div className='flex md:w-[80%] m-auto md:h-[100%]'>
                <div className='md:w-[47%] md:h-[100%] flex flex-col mt-20'>
                    <div>
                        <h6>Our Experience</h6>
                        <h2 className='mt-4 md:text-3xl font-bold'>We Have Completed 150+ <span className='block'>Projects Succesfully</span></h2>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.

                        <br/><br/>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.</p>
                        <button className='bg-[#FF5300] p-2 rounded shadow-xl mt-10'><a href='#contact'>Contact Us</a></button>
                    </div>
                </div>
                <div className='flex md:w-[53%] md:h-[100%] items-center justify-center gap-4'>
                    <div className='flex flex-col gap-4 mt-[-20px]'>
                        <div className='md:w-[270px] md:h-[250px] bg-[#3A3B3C]'></div>
                        <div className='md:w-[270px] md:h-[250px] bg-[#3A3B3C]'></div>
                    </div>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='md:w-[270px] md:h-[250px] bg-[#3A3B3C]'></div>
                        <div className='md:w-[270px] md:h-[250px] bg-[#3A3B3C]'></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Exp;