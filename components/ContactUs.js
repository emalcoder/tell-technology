'use client'

import { useState } from 'react'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',

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
  return (
    <section className='py-12 my-10 px-24' id='contact-us'>
      <div className='flex'>
        <div className='flex-1'>
          <div className='pr-80'>
            <h1 className='flex items-center mb-4'>
              <span className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-normal'>
                Reach out
              </span>
              <img src='/arrow-up-right.svg' alt='' className='w-14 h-14 ml-3' />
            </h1>
            <p className=''>
              We&apos;re here to help you stay connected, protected, and ahead of the curve. Whether
              you&apos;re looking for expert advice, need support with one of our services, or want
              to learn more about our services and solutions — our team is ready to assist.
            </p>
          </div>
        </div>
        <div className='flex-1 border border-gray-700 rounded-3xl'>
          <div className='p-6'>
            <form onSubmit={handleSubmit}>
              <div className='flex items-center w-full'>
                <div className='w-full pr-4 last:pr-0'>
                  <input
                    name='name'
                    value={contactInfo.name}
                    onChange={handleChange}
                    type='text'
                    required
                    placeholder='Name'
                  />
                </div>
                <div className='w-full pr-4 last:pr-0'>
                  <input
                    name='email'
                    value={contactInfo.email}
                    onChange={handleChange}
                    type='email'
                    required
                    placeholder='Email'
                  />
                </div>
              </div>

              <div>
                <textarea
                  name='message'
                  value={contactInfo.message}
                  onChange={handleChange}
                  id=''
                  cols='30'
                  rows='10'
                  required
                  placeholder='Message'
                ></textarea>
              </div>
              <div>
                <button className='bg-blue-900 text-white flex items-center justify-center w-full rounded-full'>
                  {!loading ? 'Send Message' : '...'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex mt-16'>
        <div className='flex-1 p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0 mr-4 rounded-3xl last:mr-0 bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg'>
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
        <div className='flex-1 p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0 mr-4 rounded-3xl last:mr-0 bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg'>
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
        <div className='flex-1 p-5 bg-grey-light-2 shadow-xl h-60 max-h-full mb-8 md:mb-0 mr-4 rounded-3xl last:mr-0 bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg'>
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
    </section>
  )
}

export default Contact
