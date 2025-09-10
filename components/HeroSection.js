'use client'

import Link from 'next/link'
import { animateScroll, scroller } from 'react-scroll'

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
    <section>
      <div className='flex'>
        <div className='flex-1'>
          <div className='h-full w-full'>
            <img src='/hero2.jpg' alt='' className='h-full w-full object-cover' />
          </div>
        </div>
        <div className='flex-[2_2_0%] bg-neutral-200'>
          <div className='flex flex-col justify-center items-center text-center pt-32 pb-30 px-40'>
            <h2 className='text-5xl font-bold mb-8'>The Source of Possibilities</h2>
            <p className='text-xl'>
              We’re driven by the belief that the right technology doesn’t just solve problems — it
              opens doors. As the source of possibilities, we’re building the tools, platforms, and
              experiences that help people and businesses go further than they ever imagined.
            </p>
            <div className='flex items-center mt-10'>
              <div className='px-8 py-2.5 border border-blue-300 rounded-full mr-4 last:mr-0 cursor-pointer'>
                <Link href='/services' className='font-bold'>
                  Explore our services
                </Link>
              </div>
              <div className='px-8 py-2.5 bg-blue-300 rounded-full mr-4 last:mr-0 cursor-pointer'>
                <Link
                  href='/#contact-us'
                  className='font-bold'
                  onClick={() => scrollTo(-192, 'contact-us')}
                >
                  Talk to us now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
