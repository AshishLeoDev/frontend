import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='w-full flex flex-col justify-center text-center mx-auto'>
      <div className='px-6 flex items-center justify-center align-middle text-center py-4 gradient-tilt h-[100px]'>
        <Link to={'https://www.linkedin.com/'} className='px-10 text-5xl text-black'>
        <i class="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link className='px-10 text-5xl text-black'>
        <i class="fa-brands fa-youtube"></i>
        </Link>
        <Link className='px-10 text-5xl text-black'>
        <i class="fa-brands fa-instagram"></i>
        </Link>
      </div>
      <div className='bg-black h-[50px] mx-auto w-full'>
        <h6 className='py-4 font-midium '>Growth | Portfolio &copy; 2023 All Rights Reserved.</h6>
      </div>
    </footer>
  )
}

export default Footer