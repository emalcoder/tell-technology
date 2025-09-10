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
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <header
              className={
                showNavbar
                  ? 'hidden lg:flex justify-between fixed top-0 left-0 min-w-full z-50'
                  : 'hidden lg:flex justify-between min-w-full bg-white'
              }
            >
              <div
                className={
                  showNavbar
                    ? 'bg-white/30 backdrop-blur-xl mt-4 px-8 ml-10 rounded-full flex items-center justify-center '
                    : 'flex items-center justify-center'
                }
              >
                <Link href='/'>
                  <Image
                    src='/logo.png'
                    alt='my logo'
                    width={180}
                    height={30}
                    onClick={() => scrollToTop()}
                  />
                </Link>
              </div>
              <nav
                className={
                  showNavbar
                    ? 'bg-white/30 backdrop-blur-xl px-8 mt-4 mr-10 rounded-full'
                    : 'self-center'
                }
              >
                <ul className='flex'>
                  <li className='pr-4 py-5 last:pr-0 cursor-pointer'>
                    <Link href='/' onClick={() => scrollToTop()} className='text-sm uppercase'>
                      home
                    </Link>
                  </li>
                  <li className='pr-4 py-5 last:pr-0 cursor-pointer'>
                    <Link
                      href='/#about-us'
                      className='text-sm uppercase'
                      onClick={() => scrollTo(0, 'about-us')}
                    >
                      about us
                    </Link>
                  </li>
                  <li className='pr-4 py-5 last:pr-0 cursor-pointer group'>
                    <a href='#' className='text-sm uppercase relative'>
                      services&nbsp;
                      <span>
                        <i className='fas fa-angle-down'></i>
                      </span>
                      <ul className='hidden group-hover:block absolute bg-black text-white shadow-xl px-4 py-10 min-w-[210px] rounded-xl'>
                        <li className='pb-4 last:pb-0'>
                          <Link
                            href='/services#internet-services'
                            onClick={() => scrollTo(0, 'internet-services')}
                          >
                            internet services
                          </Link>
                        </li>
                        <li className='pb-4 last:pb-0'>
                          <Link
                            href='/services#it-services'
                            onClick={() => scrollTo(0, 'it-services')}
                          >
                            it services
                          </Link>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className='pr-4 py-5 last:pr-0 cursor-pointer'>
                    <Link
                      href='/#our-solutions'
                      className='text-sm uppercase'
                      onClick={() => scrollTo(0, 'our-solutions')}
                    >
                      solutions
                    </Link>
                  </li>
                  <li className='pr-4 py-5 last:pr-0 cursor-pointer'>
                    <Link
                      href='/#our-products'
                      className='text-sm uppercase'
                      onClick={() => scrollTo(0, 'our-products')}
                    >
                      products
                    </Link>
                  </li>
                  <li className='pr-4 py-5 last:pr-0 cursor-pointer'>
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
        </div>
      </div>
    </div>
  )
}
export default Header
