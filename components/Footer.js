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
    <footer className='bg-neutral-200 pt-28'>
      <div className='container'>
        <div className='row justify-center border-b border-gray-300'>
          <div className='col-lg-8 '>
            <div className=''>
              <div className='mb-8 text-center'>
                <h3 className='text-2xl'>
                  Get in touch with Tell Technologies. Let’s explore what’s possible
                </h3>
              </div>
              <div className='bg-grey-light-2 shadow-xl px-12 py-20'>
                <form onSubmit={handleSubmit}>
                  <div className='flex items-center w-full'>
                    <div className='w-full pr-4 last:pr-0'>
                      <label htmlFor=''>Your Name</label>
                      <input
                        name='name'
                        value={contactInfo.name}
                        onChange={handleChange}
                        type='text'
                        required
                      />
                    </div>
                    <div className='w-full pr-4 last:pr-0'>
                      <label htmlFor=''>Your Email</label>
                      <input
                        name='email'
                        value={contactInfo.email}
                        onChange={handleChange}
                        type='email'
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor=''>Subject</label>
                    <input
                      name='subject'
                      value={contactInfo.subject}
                      onChange={handleChange}
                      type='text'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor=''>Your Message</label>
                    <textarea
                      name='message'
                      value={contactInfo.message}
                      onChange={handleChange}
                      id=''
                      cols='30'
                      rows='10'
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button className='bg-blue-900 text-white flex items-center justify-center w-full rounded-xl'>
                      {!loading ? (
                        'Send Message'
                      ) : (
                        <ClipLoader color={'#fff'} loading={loading} size={30} />
                      )}
                    </button>
                  </div>
                </form>
              </div>
              <div className='flex justify-center items-center text-center my-12'>
                <Image src='/logo.png' alt='my logo' width={240} height={50} />
              </div>
              <nav className='flex justify-center items-center text-center mb-10'>
                <ul className='flex uppercase'>
                  <li className='pr-4 last:pr-0'>
                    <Link href='/#about-us' onClick={() => scrollTo(0, 'about-us')}>
                      about us
                    </Link>
                  </li>
                  <li className='pr-4 last:pr-0'>
                    <Link href='/services'>services</Link>
                  </li>
                  <li className='pr-4 last:pr-0'>
                    <Link href='/#our-solutions' onClick={() => scrollTo(0, 'our-solutions')}>
                      solutions
                    </Link>
                  </li>
                  <li className='pr-4 last:pr-0'>
                    <Link href='/#our-products' onClick={() => scrollTo(0, 'our-products')}>
                      products
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className='relative'>
                <ul className='absolute top-0 left-1/2 transform -translate-1/2 bg-neutral-200 flex justify-center items-center text-center'>
                  <li className='pr-6 last:pr-0'>
                    <a
                      href='#'
                      className='bg-white flex items-center justify-center w-8 h-8 p-2 rounded-[50%]'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='pr-6 last:pr-0'>
                    <a
                      href='#'
                      className='bg-white flex items-center justify-center w-8 h-8 p-2 rounded-[50%]'
                    >
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li className='pr-6 last:pr-0'>
                    <a
                      href='#'
                      className='bg-white flex items-center justify-center w-8 h-8 p-2 rounded-[50%]'
                    >
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='flex justify-center items-center mb-12 mt-16'>
              <span className='text-gray-500'>
                © {new Date().getFullYear()}&nbsp;Tell Technologies. &nbsp;All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
