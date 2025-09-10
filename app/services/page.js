export default function services() {
  return (
    <main className='my-28 pt-4' id='internet-services'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='border-b-2 pb-8 border-gray-300'>
              <h3 className='text-5xl font-bold'>
                We deliver tailored technology solutions that empower you to unlock new
                possibilities and thrive in a digital world
              </h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='pt-8 pb-16'>
              <p className='text-center'>
                At Tell Technologies, we provide a comprehensive suite of cutting-edge Internet and
                IT services designed to keep your home or business connected, secure, and ahead of
                the curve. From ultra-fast fiber optic internet to reliable satellite connections
                for remote areas, alongside expert IT support including structured wiring, device
                setup, VoIP phone systems, and smart IoT solutions
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='mt-20 mb-16'>
              <div className='pb-12'>
                <h3 className='text-3xl font-bold mb-4'>Internet Services</h3>
                <p>
                  Our internet solutions provide fast, reliable connectivity for every location and
                  need. Choose from cutting-edge fiber optic internet for unmatched speed and
                  stability, or satellite internet to stay connected even in the most remote areas.
                </p>
              </div>
              <div>
                <div className='pb-6 last:pb-0'>
                  <h4 className='text-2xl font-bold mb-2'>Fiber Optic Internet Connection</h4>
                  <p>
                    Experience ultra-high-speed internet with fiber optic technology, perfect for
                    streaming, gaming, and business-critical applications.
                  </p>
                </div>
                <div className='pb-6 last:pb-0'>
                  <h4 className='text-2xl font-bold mb-2'>Satellite Internet Connection</h4>
                  <p>
                    Get reliable internet access anywhere with our satellite service, ideal for
                    rural and hard-to-reach locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='flex items-center justify-center w-full h-full mb-16'>
              <img src='/services-1.png' alt='' />
            </div>
          </div>
          <div className='col-lg-6' id='it-services'>
            <div className='flex items-center justify-center w-full h-full mb-16 pt-20'>
              <img src='/services-2.jpg' alt='' className='h-full w-full object-cover' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='mt-20 mb-16'>
              <div className='pb-12'>
                <h3 className='text-3xl font-bold mb-4'>IT Services</h3>
                <p>
                  From network infrastructure to device management, our IT services ensure your
                  technology works seamlessly so you can focus on what matters most.
                </p>
              </div>
              <div>
                <div className='pb-6 last:pb-0'>
                  <h4 className='text-2xl font-bold mb-2'>Structured Wiring & Cabling</h4>
                  <p>
                    Professional wiring and cabling solutions to create a robust, scalable network
                    infrastructure.
                  </p>
                </div>
                <div className='pb-6 last:pb-0'>
                  <h4 className='text-2xl font-bold mb-2'>Computer Setup & Maintenance</h4>
                  <p>
                    Expert setup and ongoing support to keep your computers running smoothly and
                    securely.
                  </p>
                </div>
                <div className='pb-6 last:pb-0'>
                  <h4 className='text-2xl font-bold mb-2'>VoIP Phone Systems</h4>
                  <p>
                    Flexible, cost-effective VoIP solutions for clear and scalable communication.
                  </p>
                </div>
                <div className='pb-6 last:pb-0'>
                  <h4 className='text-2xl font-bold mb-2'>IoT Solutions (Smart Home & Business)</h4>
                  <p>
                    Intelligent IoT devices designed to enhance convenience, security, and
                    efficiency in your home or workplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
