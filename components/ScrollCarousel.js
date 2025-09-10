'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

const ScrollCarousel = () => {
  return (
    <section className='mt-36' id='our-solutions'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-lg-9'>
            <div className='mt-8 mb-12'>
              <h2 className='text-5xl font-bold'>Our solutions go beyond services</h2>
            </div>
            <div>
              <p className='text-lg'>
                we build custom strategies that safeguard your digital assets, elevate your online
                presence, and drive business growth. From cybersecurity to software and application
                development, our expert team delivers innovative, scalable solutions tailored to
                your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HorizontalScrollCarousel />
    </section>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['26%', '-95%'])

  return (
    <motion.div style={{ x }} className='flex'>
      <section ref={targetRef} className='relative h-[300vh]'>
        <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />
          })}
        </div>
      </section>
    </motion.div>
  )
}

const Card = ({ card }) => {
  return (
    <div key={card.id} className='relative w-[740px] h-[580px] overflow-hidden cursor-pointer'>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute mr-8 inset-0 z-0 transition-transform duration-300 rounded-xl'
      ></div>
      <div className='absolute top-[50%] left-0 transform -translate-y-1/2 z-10 grid place-content-center'>
        <h3 className='bg-gradient-to-br from-white/20 to-white/0 p-8 m-8 mr-16 mb-2 text-3xl font-black uppercase text-white backdrop-blur-lg rounded-xl'>
          {card.title}
        </h3>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 m-8 mr-16 text-lg font-black text-white backdrop-blur-lg rounded-xl'>
          {card.descriptionText}
        </p>
      </div>
    </div>
  )
}

export default ScrollCarousel

const cards = [
  {
    url: '/cyber-security.jpg',
    title: 'Cybersecurity',
    descriptionText:
      'Protect your business with comprehensive cybersecurity solutions designed to safeguard your data, networks, and devices from evolving threats. We implement proactive measures and advanced tools to ensure your digital environment is secure and resilient.',
    id: 1,
  },
  {
    url: '/web-development.jpg',
    title: 'Web Development',
    descriptionText:
      'Create a powerful online presence with our custom web development services. We build responsive, user-friendly websites optimized for performance, engagement, and conversions — tailored to your brand and goals.',
    id: 2,
  },
  {
    url: '/software-development.jpg',
    title: 'Software Development',
    descriptionText:
      'Transform your ideas into reality with our end-to-end software development solutions. From design to deployment, we deliver reliable, scalable software tailored to streamline your operations and meet your specific business requirements.',
    id: 3,
  },
  {
    url: '/application-development.jpg',
    title: 'Application Development',
    descriptionText:
      'Engage users and enhance productivity with custom application development. Whether mobile or desktop, our applications are built with the latest technologies to deliver seamless experiences that drive results.',
    id: 4,
  },
]
