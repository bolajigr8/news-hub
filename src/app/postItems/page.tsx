'use client'
import PItemOne from '@/components/PItemOne'
import PageTitle from '@/components/PageTitle'
import PreLoader from '@/components/PreLoader'
import { PostItemsOne } from '@/types'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Aos from 'aos'

const PostItems = () => {
  const [items, setItems] = useState([])

  const getAllPosts = async () => {
    try {
      const res = await axios.get('/api/postitem/')
      const data = await res.data
      setItems(data)
    } catch (error: any | null) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <main id='main'>
      <section id='posts' className='posts   '>
        <div className='container'>
          <article className='row'>
            <PageTitle title={'All Posts'} />
            {items && items.length > 0 ? (
              <>
                {items.map((item: PostItemsOne) => {
                  return (
                    <div
                      data-aos='zoom-in'
                      key={item._id}
                      className='col-lg-3 col-md-6 '
                    >
                      <PItemOne item={item} large={false} />
                    </div>
                  )
                })}
              </>
            ) : (
              <PreLoader />
            )}
          </article>
        </div>
      </section>
    </main>
  )
}

export default PostItems
