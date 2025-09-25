'use client'

import Link from 'next/link'
import { animateScroll, scroller } from 'react-scroll'
import Header from '@/components/Header'

const HeroSection = () => {
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
    <section className='h-screen bg-[url(/hero.jpg)] bg-no-repeat bg-center bg-cover text-white relative'>
      <video autoPlay muted loop playsInline className='w-full h-full object-cover'>
        <source src='/my-video8.mp4' type='video/mp4' />
      </video>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black/[.50]'>
        <div className='flex justify-between absolute top-1/2 left-24 transform -translate-y-1/2 font-inter'>
          <div className='flex-1 pr-48'>
            <div className='flex flex-col justify-center'>
              <h2 className='text-4xl font-bold mb-8 uppercase'>The Source of Possibilities</h2>
              <p className=''>
                We’re driven by the belief that the right technology doesn’t just solve problems —
                it opens doors. As the source of possibilities, we’re building the tools, platforms,
                and experiences that help people and businesses go further than they ever imagined.
              </p>
              <div className='flex items-center mt-10'>
                <div className='px-8 py-2.5 border border-blue-800 rounded-xl mr-4 last:mr-0 cursor-pointer'>
                  <Link href='/services' className='flex justify-center items-center font-bold'>
                    <span>Explore our services</span>
                    <img src='/arrow-up-right.svg' alt='' className='ml-2' />
                  </Link>
                </div>
                <div className='px-8 py-2.5 bg-blue-800 rounded-xl mr-4 last:mr-0 cursor-pointer'>
                  <Link
                    href='/#contact-us'
                    className='font-bold'
                    onClick={() => scrollTo(-12, 'contact-us')}
                  >
                    Talk to us now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
