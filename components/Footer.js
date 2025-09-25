'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { animateScroll, scroller } from 'react-scroll'

const Footer = () => {
  const [loading, setLoading] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContactInfo({ ...contactInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
  }

  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  const scrollTo = (offset, section) => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset,
    })
  }

  return (
    <footer className='pt-28'>
      <div>
        <div className='mb-16'>
          <h3 className='text-3xl text-center'>
            Get in touch with Tell Technologies.
            <span className='text-blue-800'> Let’s explore </span>what’s possible
          </h3>
        </div>
        <div className='flex justify-center items-center '>
          <Link href='/#contact-us' className='flex justify-center items-center max-w-max'>
            <div className='bg-white text-black p-2 rounded-[50%] mr-2'>
              <img src='/arrow-up-right-black.svg' alt='' />
            </div>
            <span>Talk to us now</span>
          </Link>
        </div>
        <div className='bg-gray-900 rounded-xl mx-44 my-32 pt-16 pb-10 px-16'>
          <div className='flex justify-center items-center text-center mb-12'>
            <Link href='/' className='font-bold italic text-blue-200'>
              Tell Technologies
            </Link>
          </div>
          <nav className='flex justify-center items-center text-center mb-10 mt-20'>
            <ul className='flex uppercase text-sm'>
              <li className='pr-10 last:pr-0'>
                <Link href='/#about-us' onClick={() => scrollTo(0, 'about-us')}>
                  about us
                </Link>
              </li>
              <li className='pr-10 last:pr-0'>
                <Link href='/services'>services</Link>
              </li>
              <li className='pr-10 last:pr-0'>
                <Link href='/#our-solutions' onClick={() => scrollTo(0, 'our-solutions')}>
                  solutions
                </Link>
              </li>
              <li className='pr-10 last:pr-0'>
                <Link href='/#our-products' onClick={() => scrollTo(0, 'our-products')}>
                  products
                </Link>
              </li>
            </ul>
          </nav>
          <div className='relative mt-16 border-t border-gray-700'>
            <ul className='absolute top-0 left-1/2 transform -translate-1/2 flex justify-center items-center text-center bg-gray-900'>
              <li className='pr-6 last:pr-0'>
                <a
                  href='#'
                  className='border border-gray-700 flex items-center justify-center w-10 h-10 p-2 rounded-[50%]'
                >
                  <i className='fab fa-facebook-f text-sm'></i>
                </a>
              </li>
              <li className='pr-6 last:pr-0'>
                <a
                  href='#'
                  className='border border-gray-700 flex items-center justify-center w-10 h-10 p-2 rounded-[50%]'
                >
                  <i className='fab fa-twitter text-sm'></i>
                </a>
              </li>
              <li className='pr-6 last:pr-0'>
                <a
                  href='#'
                  className='border border-gray-700 flex items-center justify-center w-10 h-10 p-2 rounded-[50%]'
                >
                  <i className='fab fa-linkedin-in text-sm'></i>
                </a>
              </li>
            </ul>
          </div>
          <div className='flex justify-center items-center mt-20'>
            <span className='text-gray-500 text-sm'>
              © {new Date().getFullYear()}&nbsp;Tell Technologies. &nbsp;All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
