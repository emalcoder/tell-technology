import Image from 'next/image'
import Link from 'next/link'

import HeroCarousel from '@/components/HeroSection'
import ScrollCarousel from '@/components/ScrollCarousel'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className='pt-36 mb-36' id='about-us'>
        <div className='container'>
          <div className='row pb-10 mb-16 border-b border-gray-200'>
            <div className='col-lg-9'>
              <div>
                <div>
                  <h4 className='text-4xl'>
                    We are the source of possibilities — and we&apos;re just getting started
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='min-h-full w-full'>
                <video autoPlay muted loop playsInline className='w-full h-full object-cover'>
                  <source src='/my-video.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='flex items-center'>
                <div>
                  <p className='pb-12 last:pb-0'>
                    At Tell Technologies, we believe technology is more than just innovation —
                    it&apos;s the engine of possibility. Founded on the principle that progress
                    begins with bold ideas, we exist to empower people, organizations, and
                    industries to go beyond what they thought was possible.
                  </p>
                  <p className='pb-12 last:pb-0'>
                    We are creators, problem-solvers, and explorers, committed to shaping a future
                    where potential is limitless. Whether through innovative connectivity, IT
                    solutions, advanced software, intelligent systems, or transformative digital
                    experiences, everything we build and provide is designed to unlock new
                    opportunities.
                  </p>
                  <p className='pb-12 last:pb-0'>
                    Our solutions aren’t just about keeping up — they’re about setting the pace.
                    From startups to global enterprises, we partner with those who refuse to settle,
                    helping them harness the full power of technology to accelerate their journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollCarousel />
      <section className='pb-32 pt-28 border-b border-gray-300 relative' id='our-products'>
        <img src='/1.png' alt='' className='absolute top-0 left-0 w-60 h-auto ml-20 mt-48' />
        <img
          src='/3.jpg'
          alt=''
          className='absolute bottom-0 left-0 w-60 h-auto ml-20 mb-[32rem]'
        />
        <img src='/2.png' alt='' className='absolute top-0 right-0 w-60 h-auto mr-20 mt-[30rem]' />
        <img src='/4.png' alt='' className='absolute bottom-0 right-0 w-60 h-auto mr-20 mb-28' />
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-center mb-24'>
                <h2 className='text-4xl font-bold pb-6'>Powering connectivity with quality.</h2>
                <p className='px-20'>
                  At Tell Technologies, we provide high-quality networking products designed to
                  support your connectivity and infrastructure needs. From fiber cables to
                  specialized tools, our product lineup ensures reliability, durability, and
                  performance for both residential and commercial projects.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div>
                <div>
                  <div className='flex'>
                    <div className='px-8 py-6 rounded-[50%] bg-blue-700 text-white text-2xl font-bold max-h-max'>
                      1
                    </div>
                    <div className='pl-8 pb-8'>
                      <h3 className='text-2xl font-bold mb-2'>Fiber Cables</h3>
                      <p>
                        Premium fiber optic cables engineered for fast, stable, and long-distance
                        data transmission — ideal for modern high-speed networks.
                      </p>
                    </div>
                  </div>
                  <div className='ml-9 mb-10'>
                    <img src='/dotted-line.png' alt='' className='h-[122px] w-[5px]' />
                  </div>
                </div>
                <div>
                  <div className='flex'>
                    <div className='px-8 py-6 rounded-[50%] bg-blue-700 text-white text-2xl font-bold max-h-max'>
                      2
                    </div>
                    <div className='pl-8 pb-8'>
                      <h3 className='text-2xl font-bold mb-2'>Ethernet Cable</h3>
                      <p>
                        Durable and high-performance Ethernet cables designed to support reliable
                        wired connections for homes and businesses.
                      </p>
                    </div>
                  </div>
                  <div className='ml-9 mb-10'>
                    <img src='/dotted-line.png' alt='' className='h-[122px] w-[5px]' />
                  </div>
                </div>
                <div>
                  <div className='flex'>
                    <div className='px-8 py-6 rounded-[50%] bg-blue-700 text-white text-2xl font-bold max-h-max'>
                      4
                    </div>
                    <div className='pl-8 pb-8'>
                      <h3 className='text-2xl font-bold mb-2'>Fiber Head Screwdriver</h3>
                      <p>
                        Specialized fiber head screwdrivers designed for the precise handling and
                        installation of fiber optic connectors.
                      </p>
                    </div>
                  </div>
                  <div className='ml-9 mb-10'>
                    <img src='/dotted-line.png' alt='' className='h-[122px] w-[5px]' />
                  </div>
                </div>
                <div>
                  <div className='flex'>
                    <div className='px-8 py-6 rounded-[50%] bg-blue-700 text-white text-2xl font-bold max-h-max'>
                      3
                    </div>
                    <div className='pl-8 pb-8'>
                      <h3 className='text-2xl font-bold mb-2'>
                        Fiber Splicing Kit (Underground & Aerial Repair Suit)
                      </h3>
                      <p>
                        The Tell Technologies Fiber Splicing Kit is a professional-grade solution
                        built specifically for repairing broken fiber optic cables in both
                        underground and aerial environments. Whether it’s a field emergency or
                        planned maintenance, this kit equips fiber technicians with everything
                        needed to perform quick, secure, and long-lasting splices — even in the most
                        demanding conditions. Designed for real-world challenges, the kit includes
                        durable tools, weather-resistant enclosures, and all necessary materials to
                        ensure minimal downtime and reliable signal restoration. It’s your go-to kit
                        for keeping fiber networks running smoothly — no matter where the break
                        happens.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-36' id='contact-us'>
        <div className='container'>
          <div className='row mb-24'>
            <div className='col-lg-12'>
              <div className='mb-12'>
                <div className='text-center'>
                  <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-normal mb-4'>
                    We are here for you, contact us
                  </h1>
                  <p className=''>
                    We&apos;re here to help you stay connected, protected, and ahead of the curve.
                    Whether you&apos;re looking for expert advice, need support with one of our
                    services, or want to learn more about our services and solutions — our team is
                    ready to assist.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0'>
                <div className='text-secondary text-3xl'>
                  <i className='fas fa-envelope'></i>
                </div>
                <div className='my-8 text-lg'>
                  <p>We’ll respond within 24 hours.</p>
                </div>
                <div className='mb-10'>
                  <a className='text-base lg:text-xl' href='mailto:info@afghannotary.com'>
                    Email
                    <span className='text-accents_7 font-normal block lg:inline-block ml-0 lg:ml-2.5'>
                      info@telltechnologies.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0'>
                <div className='text-secondary text-3xl'>
                  <i className='fas fa-phone-alt'></i>
                </div>
                <div className='mt-8 mb-3 text-lg'>
                  <p>Talk directly with a team member.</p>
                </div>
                <div className='mb-8'>
                  <div className='text-base lg:text-xl'>
                    Office Hours &nbsp;{' '}
                    <span className='text-accents_7 block lg:inline-block'>
                      Mon–Fri, 9:00 AM – 5:00 PM
                    </span>
                  </div>
                  <a className='text-base lg:text-xl' href='tel:+93 730 830 830'>
                    Call &nbsp;
                    <span className='text-accents_7 block lg:inline-block'>850-855-6564</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0'>
                <div className='text-secondary text-3xl'>
                  <i className='fas fa-map-marked-alt'></i>
                </div>
                <div className='my-8 text-lg'>
                  <p>Virginia, USA</p>
                </div>
                <div className='mb-8'>
                  <a className='text-xl' href='https://goo.gl/maps/tG13K3HFvKcY3b8k8'>
                    Get directions ▸
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
