import Image from 'next/image'
import Link from 'next/link'

import HeroCarousel from '@/components/HeroSection'
import ScrollCarousel from '@/components/ScrollCarousel'
import HeroSection from '@/components/HeroSection'
import Contact from '@/components/ContactUs'

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <section className='py-32 px-24 bg-blue-800 bg-tile-middle-lg' id='about-us'>
          <div className='flex'>
            <div className='flex-[2_2_0%]'>
              <div className='mb-24 mx-64'>
                <h2 className='text-4xl font-bold '>
                  We are The <span className='text-blue-800'>Source of Possibilities</span> — and
                  we&apos;re just getting started.
                </h2>
              </div>
            </div>
            <div className='flex-1'></div>
          </div>
          <div className='flex'>
            <div className='flex-[2_2_0%]'>
              <div className='flex justify-center items-center h-full'>
                <img src='/aboutus-4.png' alt='' className='w-[550px] pl-24 mb-24' />
              </div>
            </div>
            <div className='flex-1'>
              <div>
                <div className='mb-10 pr-20'>
                  <h3 className='text-2xl font-bold mb-2'>Innovation That Empowers</h3>
                  <p className='text-gray-400'>
                    At Tell Technologies, we believe technology is more than just innovation —
                    it&apos;s the engine of possibility. Founded on the principle that progress
                    begins with bold ideas, we exist to empower people, organizations, and
                    industries to go beyond what they thought was possible.
                  </p>
                </div>
                <div className='mb-10 pr-20'>
                  <h3 className='text-2xl font-bold mb-2'>Where Ideas Become Possibilities</h3>
                  <p className='text-gray-400'>
                    We are creators, problem-solvers, and explorers, committed to shaping a future
                    where potential is limitless. Whether through innovative connectivity, IT
                    solutions, advanced software, intelligent systems, or transformative digital
                    experiences, everything we build and provide is designed to unlock new
                    opportunities.
                  </p>
                </div>
                <div className='mb-10 pr-20'>
                  <h3 className='text-2xl font-bold mb-2'>Driving the Future Forward</h3>
                  <p className='text-gray-400'>
                    Our solutions aren&apos;t just about keeping up — they&apos;re about setting the
                    pace. From startups to global enterprises, we partner with those who refuse to
                    settle, helping them harness the full power of technology to accelerate their
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[url(/slogan2.jpg)] bg-cover bg-center h-screen relative'>
          <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black/[.75]'>
            <div className='flex px-16 pt-24'>
              <div className='flex-1'>
                <div className='flex items-center'>
                  <div className='bg-white w-2 h-2 rounded-[100%] mr-2'></div>
                  <h4>Who we are</h4>
                </div>
              </div>
              <h4 className='flex-[2_2_0%] text-4xl'>
                We believe innovation is more than advancement — it&apos;s transformation. Guided by
                this vision, we craft solutions that empower people and organizations to push
                boundaries, unlock opportunities, and shape a future filled with potential.
              </h4>
            </div>
            <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2'>
              <div className='mb-5'>Explore detailed information about our services.</div>
              <div className='px-8 py-2.5 border border-blue-800 rounded-xl mr-4 last:mr-0 cursor-pointer'>
                <Link href='/services' className='flex justify-center items-center font-bold'>
                  <span>Explore our services</span>
                  <img src='/arrow-up-right.svg' alt='' className='ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <ScrollCarousel />
        <section className='p-24 mb-48' id='our-products'>
          <div className='flex mb-20'>
            <div className='flex-1'>
              <div>
                <h4 className='text-sm font-bold'>Our Products</h4>
              </div>
            </div>
            <div className='flex-[2_2_0%]'>
              <div className='border-b border-gray-600 ml-20 pb-20'>
                <p className='text-2xl font-bold'>
                  At Tell Technologies, we provide high-quality networking products designed to
                  support your connectivity and infrastructure needs. From fiber cables to
                  specialized tools, our product lineup ensures reliability, durability, and
                  performance for both residential and commercial projects.
                </p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='flex-1'>
              <img
                src='/services-4.jpg'
                alt=''
                className='w-full h-full min-[1720px]:h-[648px] object-cover'
              />
            </div>
            <div className='flex-[2_2_0%]'>
              <div className='ml-20'>
                <div className='flex mb-24 last:mb-0'>
                  <div className='text-3xl font-bold mr-56'>01.</div>
                  <div>
                    <h3 className='text-3xl font-bold mb-6'>Fiber Cables</h3>
                    <p>
                      Premium fiber optic cables engineered for fast, stable, and long-distance data
                      transmission — ideal for modern high-speed networks.
                    </p>
                  </div>
                </div>
                <div className='flex mb-24 last:mb-0'>
                  <div className='text-3xl font-bold mr-56'>02.</div>
                  <div>
                    <h3 className='text-3xl font-bold mb-6'>Ethernet Cable</h3>
                    <p>
                      Durable and high-performance Ethernet cables designed to support reliable
                      wired connections for homes and businesses.
                    </p>
                  </div>
                </div>
                <div className='flex mb-24 last:mb-0'>
                  <div className='text-3xl font-bold mr-56'>03.</div>
                  <div>
                    <h3 className='text-3xl font-bold mb-6'>Fiber Head Screwdriver</h3>
                    <p>
                      Specialized fiber head screwdrivers designed for the precise handling and
                      installation of fiber optic connectors.
                    </p>
                  </div>
                </div>
                <div className='flex mb-24 last:mb-0'>
                  <div className='text-3xl font-bold mr-56'>04.</div>
                  <div>
                    <h3 className='text-3xl font-bold mb-6'>
                      Fiber Splicing Kit (Underground & Aerial Repair Suit)
                    </h3>
                    <p>
                      The Tell Technologies Fiber Splicing Kit is a professional, all-in-one
                      solution for repairing fiber optic cables in any environment. It provides
                      durable tools, weather-resistant enclosures, and essential materials to ensure
                      quick, secure, and reliable splices, minimizing downtime and keeping networks
                      running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </>
  )
}
