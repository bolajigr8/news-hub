'use client'
import FooterLinks from '@/components/FooterLinks'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PostItemsOne } from '@/types'
import FooterPosts from '@/components/FooterPosts'
import PreLoader from '@/components/PreLoader'
import { scis } from '@/data/data'

const Footer = () => {
  const [items, setItems] = useState<PostItemsOne[]>([])

  // get items from DB
  const getItemsDataAbout = async () => {
    try {
      const res = await axios('/api/postitem')
      const data = await res.data
      setItems(data)
    } catch (error: any | null) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getItemsDataAbout()
  }, [])

  return (
    <footer className='bg-black text-white  '>
      {/* footer-center */}
      <div className='container py-12 px-4   grid grid-colu-1 grid-colu-2 grid-colu-3 gap-4'>
        {/* first */}
        <div className='mb-6'>
          <article>
            <h1 className='mb-[2rem]'>Digital News</h1>
            <p className=' mb-[2rem] p-w '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero
              voluptas, ex dolorum repudiandae eveniet rem aliquam aspernatur.
              Cupiditate, ad sed vel sunt perspiciatis iste corrupti eligendi
              distinctio ipsam veritatis?
            </p>
            <Link className='text-white ' href={`/`}>
              Learn More
            </Link>
            <div className='underline'></div>
          </article>
        </div>
        {/* second */}
        <div className='flex justify-around  gap-5  '>
          <article>
            <h1 className='mb-6'>Navigation</h1>
            <FooterLinks link={'/'} name={'Home'} />
            <FooterLinks link={'/postItems'} name={'Blog'} />
            <FooterLinks link={'/postItems'} name={'News'} />
            <FooterLinks link={'/postItems'} name={'Post'} />
            <FooterLinks link={'/about'} name={'About'} />
            <FooterLinks link={'/contact'} name={'Contact'} />
          </article>
          <article>
            <h1 className='mb-6'>Categories</h1>
            <FooterLinks link={'/'} name={'Business'} />
            <FooterLinks link={'/postItems'} name={'Culture'} />
            <FooterLinks link={'/postItems'} name={'Sport'} />
            <FooterLinks link={'/postItems'} name={'Food'} />
            <FooterLinks link={'/about'} name={'Politics'} />
            <FooterLinks link={'/contact'} name={'Celebrities'} />
            <FooterLinks link={'/contact'} name={'Startups'} />
            <FooterLinks link={'/contact'} name={'Travel'} />
          </article>
        </div>
        {/* third */}
        <div>
          <h1 className='mb-4 text-xl font-bold'>Recent Posts</h1>
          <article>
            {items && items.length > 0 ? (
              items.slice(-6).map((item, index) => {
                return <FooterPosts item={item} key={index} />
              })
            ) : (
              <PreLoader />
            )}
          </article>
        </div>
      </div>
      {/* last  */}
      <hr />
      <div className='container py-12 px-4 md:flex    '>
        <div className=' mx-auto text-center md:flex footer-gap  '>
          <h1 className='mb-2   '>
            &copy; Copyright Digital News. All Rights Reserved
          </h1>
          {scis.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target='_blank'
              className='mx-2 text-white '
            >
              <span className={item.icon}></span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
