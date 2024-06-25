'use client'
import Image from 'next/image'
import './css/about.css'
import Person from './Person'
import { useEffect } from 'react'

import Aos from 'aos'
import Link from 'next/link'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <main id='main' className=' bg-white min-h-screen'>
      <div data-aos='fade-up' className='container mx-auto py-12 px-4'>
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-[5rem]'>
          About Us
        </h1>
        <div className=' p-6 rounded-lg shadow-lg '>
          {/* first info */}
          <div className='md:flex items-center lg:gap-0 mb-8 gap-4 justify-around'>
            {/* image */}
            <div className='mb-6'>
              <Image
                width={400}
                height={400}
                src='/assets/img/post-sq-5.jpg'
                alt='Dog'
                className='w-full lg:w-[30rem] h-[20rem] object-cover rounded-lg shadow-md'
              />
            </div>
            {/* article */}
            <article>
              <h1 className='text-4xl md:text-3xl  font-bold text-center mb-8'>
                Company History
              </h1>
              <p className='max-w-[25rem]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident consectetur assumenda illum alias, quibusdam debitis
                quidem neque possimus doloremque ex cumque sint dolor omnis
              </p>
              <br />
              <p className='max-w-[25rem]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae labore libero ab commodi vel alias impedit, rerum
              </p>
            </article>
          </div>
          <hr />
          {/* second info */}
          <div className='md:flex items-center lg:gap-0 mt-[5rem] gap-4 justify-around'>
            {/* article */}
            <article>
              <h1 className='text-4xl md:text-3xl  font-bold text-center mb-8'>
                Mission & Vision
              </h1>
              <p className='max-w-[25rem]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident consectetur assumenda illum alias, quibusdam debitis
                quidem neque possimus doloremque ex cumque sint dolor omnis
              </p>
              <br />
              <p className='max-w-[25rem]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae labore libero ab commodi vel alias impedit, rerum
              </p>
            </article>
            {/* image */}
            <div className='mb-6'>
              <Image
                width={400}
                height={400}
                src='/assets/img/post-sq-1.jpg'
                alt='Dog'
                className='w-full lg:w-[30rem] h-[20rem] object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div data-aos='fade-up' className='bg-gray-200    '>
        <div className='container mx-auto py-12 px-4 md:flex justify-around   '>
          {/* article */}
          <article>
            <h1 className='text-3xl md:text-4xl font-bold  md:text-left text-gray-800 mb-[2rem]'>
              Blog Posts
            </h1>
            <p className='max-w-[25rem] '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae labore libero ab commodi vel alias impedit, rerum
            </p>
            <br />
            <p className='max-w-[25rem] '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              corporis nobis molestias quaerat quasi hic ducimus? Commodi esse
              odio vel.
            </p>
            <p className='max-w-[25rem] '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
              unde, tempore fugit sed voluptas, quaerat repellat, molestias fuga
              alias excepturi totam eum natus porro quae adipisci incidunt
              sapiente. Rerum!
            </p>

            <button className='font-bold mt-[3rem] text-xl  ' type='button'>
              <Link href={`/postItems`}>View More</Link>
            </button>
          </article>
          {/* img article */}
          <article className='md:mt-0 sm:pl-[2rem]  mt-[3rem]'>
            <div className='flex gap-4'>
              <Image
                width={200}
                height={200}
                src='/assets/img/post-sq-2.jpg'
                alt='Dog'
                className='blog-img     object-cover rounded-lg shadow-md'
              />
              <Image
                width={200}
                height={200}
                src='/assets/img/post-sq-3.jpg'
                alt='Dog'
                className=' blog-img    object-cover rounded-lg shadow-md'
              />
            </div>
            <div className='flex gap-4 mt-8'>
              <Image
                width={200}
                height={200}
                src='/assets/img/post-sq-5.jpg'
                alt='Dog'
                className='blog-img   object-cover rounded-lg shadow-md'
              />
              <Image
                width={200}
                height={200}
                src='/assets/img/post-sq-6.jpg'
                alt='Dog'
                className='blog-img  object-cover rounded-lg shadow-md'
              />
            </div>
          </article>
        </div>
      </div>
      {/* fourth section */}
      <div data-aos='zoom-in' className='container mx-auto py-12 px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-[2rem]'>
          Our Team
        </h1>
        <p className='mx-auto text-center max-w-[25rem]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at
          maxime delectus. Quo accusamus amet at harum porro nihil aut.
        </p>

        <article
          data-aos='zoom-in'
          className='md:flex md:flex-wrap  justify-around gap-4 mt-[6rem] '
        >
          {/*  one */}
          <Person
            title={'FOUNDER & CEO'}
            name={'Cameroon Williamson'}
            src={'/assets/img/person-1.jpg'}
          />
          {/*  one */}
          <Person
            title={'FOUNDER, VP'}
            name={'Wade Warren'}
            src={'/assets/img/person-2.jpg'}
          />
          {/*  one */}
          <Person
            title={'EDITOR STAFF'}
            name={'Jane Cooper'}
            src={'/assets/img/person-3.jpg'}
          />
          {/*  one */}
          <Person
            title={'EDITOR STAFF'}
            name={'Joshua Enoch'}
            src={'/assets/img/person-4.jpg'}
          />
          {/*  one */}
          <Person
            title={'EDITOR STAFF'}
            name={'Esther David'}
            src={'/assets/img/person-5.jpg'}
          />
          {/*  one */}
          <Person
            title={'EDITOR STAFF'}
            name={'Imran Kamakazi '}
            src={'/assets/img/person-6.jpg'}
          />
          {/*  one */}
          <Person
            title={'EDITOR STAFF'}
            name={'Precious Sisi'}
            src={'/assets/img/person-7.jpg'}
          />
          {/*  one */}
          <Person
            title={'EDITOR STAFF'}
            name={'Wade Warren'}
            src={'/assets/img/person-2.jpg'}
          />
        </article>
      </div>
    </main>
  )
}

export default About
