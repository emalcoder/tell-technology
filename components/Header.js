'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { animateScroll, scroller } from 'react-scroll'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setShowNavbar(window.pageYOffset > 200))
    }
  }, [])
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
    <div className=''>
      <header className='hidden lg:flex justify-between mx-24'>
        <div
          className={
            showNavbar
              ? 'bg-white/30 backdrop-blur-xl mt-4 px-8 ml-10 rounded-full flex items-center justify-center '
              : 'flex items-center justify-center '
          }
        >
          <Link href='/' className='font-bold italic text-blue-200 mx'>
            Tell Technologies
          </Link>
        </div>
        <nav
          className={
            showNavbar ? 'bg-white/30 backdrop-blur-xl px-8 mt-4 mr-10 rounded-full' : 'self-center'
          }
        >
          <ul className='flex'>
            <li className='pr-10 py-5 last:pr-0 cursor-pointer'>
              <Link href='/' onClick={() => scrollToTop()} className='text-sm uppercase'>
                home
              </Link>
            </li>
            <li className='pr-10 py-5 last:pr-0 cursor-pointer'>
              <Link
                href='/#about-us'
                className='text-sm uppercase'
                onClick={() => scrollTo(0, 'about-us')}
              >
                about us
              </Link>
            </li>
            <li className='pr-10 py-5 last:pr-0 group'>
              <a href='/services' className='text-sm uppercase cursor-pointer relative'>
                services&nbsp;
                <span>
                  <i className='fas fa-angle-down'></i>
                </span>
                <ul className='hidden group-hover:block absolute bg-black text-white px-4 py-10 mt-2 min-w-[210px] rounded-xl shadow-inner'>
                  <li className='mb-4 last:mb-0'>
                    <Link
                      href='/services#internet-services'
                      onClick={() => scrollTo(0, 'internet-services')}
                    >
                      internet services
                    </Link>
                  </li>
                  <li className='mb-4 last:mb-0'>
                    <Link href='/services#it-services' onClick={() => scrollTo(0, 'it-services')}>
                      it services
                    </Link>
                  </li>
                </ul>
              </a>
            </li>
            <li className='pr-10 py-5 last:pr-0 cursor-pointer'>
              <Link
                href='/#our-solutions'
                className='text-sm uppercase'
                onClick={() => scrollTo(0, 'our-solutions')}
              >
                solutions
              </Link>
            </li>
            <li className='pr-10 py-5 last:pr-0 cursor-pointer'>
              <Link
                href='/#our-products'
                className='text-sm uppercase'
                onClick={() => scrollTo(0, 'our-products')}
              >
                products
              </Link>
            </li>
            <li className='pr-10 py-5 last:pr-0 cursor-pointer'>
              <Link
                href='/#contact-us'
                className='text-sm uppercase'
                onClick={() => scrollTo(0, 'contact-us')}
              >
                conduct us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Header
