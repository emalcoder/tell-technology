import Link from 'next/link'

export default function services() {
  return (
    <main className='mb-20'>
      <section className='h-screen flex items-center justify-center px-72 bg-black bg-[url(/hero.jpg)] bg-no-repeat bg-center bg-cover relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-100 transition-custom bg-black/[.65]'></div>
        <div className='z-50'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold mb-8 leading-tight'>
              We deliver tailored technology solutions that empower you to unlock new possibilities
              and thrive in a digital world.
            </h2>
            <p className='px-36 pt-12'>
              At Tell Technologies, we provide a comprehensive suite of cutting-edge Internet and IT
              services designed to keep your home or business connected, secure, and ahead of the
              curve. From ultra-fast fiber optic internet to reliable satellite connections for
              remote areas, alongside expert IT support including structured wiring, device setup,
              VoIP phone systems, and smart IoT solutions.
            </p>
          </div>
          <div className='flex justify-center items-center mt-12'>
            <div className='px-8 py-2.5 border max-w-max border-blue-800 rounded-xl mr-4 cursor-pointer'>
              <Link href='/#contact-us' className='flex justify-center items-center font-bold'>
                <span>Talk to us now</span>
                <img src='/arrow-up-right.svg' alt='' className='ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className='relative bg-[url(/bg-service1.jpg)] bg-no-repeat bg-cover bg-right-bottom -z-20'
        id='internet-services'
      >
        <div className='absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full opacity-100 transition-custom bg-black/[.65]'></div>
        <div className='py-32 px-20'>
          <div className='mt-12'>
            <div className='flex justify-end'>
              <div className='flex-1'>
                <div className='mt-20 mb-16 px-32'>
                  <div className='pb-12'>
                    <h3 className='text-3xl font-bold uppercase mb-4'>Internet Services</h3>
                    <p className='text-gray-300'>
                      Our internet solutions provide fast, reliable connectivity for every location
                      and need. Choose from cutting-edge fiber optic internet for unmatched speed
                      and stability, or satellite internet to stay connected even in the most remote
                      areas.
                    </p>
                  </div>
                  <div>
                    <div className='pb-6 last:pb-0'>
                      <h4 className='text-2xl uppercase font-bold mb-2'>
                        Fiber Optic Internet Connection
                      </h4>
                      <p className='text-gray-300'>
                        Experience ultra-high-speed internet with fiber optic technology, perfect
                        for streaming, gaming, and business-critical applications.
                      </p>
                    </div>
                    <div className='pb-6 last:pb-0'>
                      <h4 className='text-2xl uppercase font-bold mb-2'>
                        Satellite Internet Connection
                      </h4>
                      <p className='text-gray-300'>
                        Get reliable internet access anywhere with our satellite service, ideal for
                        rural and hard-to-reach locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-1'></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='bg-[url(/services2.jpg)] bg-no-repeat bg-center bg-cover relative -z-30'
        id='it-services'
      >
        <div className='absolute bottom-0 right-0 w-auto min-w-full min-h-full max-w-none -z-20'>
          <video autoPlay muted loop playsInline className='w-full h-full object-cover'>
            <source src='/bg-services.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-100 -z-10 transition-custom bg-black/[.65]'></div>
        <div className='pt-24 pb-16 px-20'>
          <div className='mt-12'>
            <div className='flex justify-end'>
              <div className='flex-1'></div>
              <div className='flex-[2_2_0%]'>
                <div className='mb-16 px-28'>
                  <div className='pb-12'>
                    <h3 className='text-3xl font-bold uppercase mb-4'>IT Services</h3>
                    <p className='text-gray-300'>
                      From network infrastructure to device management, our IT services ensure your
                      technology works seamlessly so you can focus on what matters most.
                    </p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='pb-12 flex-1 self-start mr-8 last:mr-0'>
                      <h4 className='text-xl uppercase font-bold mb-2'>
                        Structured Wiring & Cabling
                      </h4>
                      <p className='text-gray-300'>
                        Professional wiring and cabling solutions to create a robust, scalable
                        network infrastructure.
                      </p>
                    </div>
                    <div className='pb-12 flex-1 self-start mr-8 last:mr-0'>
                      <h4 className='text-xl uppercase font-bold mb-2'>
                        Computer Setup & Maintenance
                      </h4>
                      <p className='text-gray-300'>
                        Expert setup and ongoing support to keep your computers running smoothly and
                        securely.
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='pb-12 flex-1 self-start mr-8 last:mr-0'>
                      <h4 className='text-xl uppercase font-bold mb-2'>
                        IoT Solutions (Smart Home & Business)
                      </h4>
                      <p className='text-gray-300'>
                        Intelligent IoT devices designed to enhance convenience, security, and
                        efficiency in your home or workplace.
                      </p>
                    </div>
                    <div className='pb-12 flex-1 self-start mr-8 last:mr-0'>
                      <h4 className='text-xl uppercase font-bold mb-2'>VoIP Phone Systems</h4>
                      <p className='text-gray-300'>
                        Flexible, cost-effective VoIP solutions for clear and scalable
                        communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
