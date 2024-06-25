'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import './css/posts.css'
import PItemOne from '@/components/PItemOne'
import { PostItemsOne } from '@/types'
import TrendingPosts from '@/components/TrendingPosts'
import PreLoader from '@/components/PreLoader'

const Posts = () => {
  const router = useRouter()
  // to put items gotten from DB
  const [items, setItems] = useState<PostItemsOne[]>([])
  // for the single post item
  const [item, setItem] = useState<any>({})

  // get items from DB
  const getItemsData = async () => {
    // fetch('/api/postitems')
    //   .then((res) => {
    //     console.log(res)
    //     res.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //     setItems(data)
    //   })

    //   .catch((e) => console.log(e.message))

    try {
      const res = await axios('/api/postitem')
      const data = await res.data
      setItems(data)
    } catch (error: any | null) {
      console.log(error.message)
    }
  }

  // Get individual items from the [id]- route.ts
  const getSinglePostitem = async (id: string) => {
    try {
      const res = await axios(`/api/postitem/${id}`)

      if (res.status === 404) {
        router.push('./not-found')
      } else {
        const data = await res.data

        setItem(data)
      }
    } catch (error: any | null) {
      console.log(error.message)
    }
  }

  // calling the method whenever the post method gets landed on the dom
  useEffect(() => {
    getItemsData()
    // get the id for the to: true from the db
    getSinglePostitem('6673340676505667a32a8e9a')
  }, [])

  // items filtererd out
  const filterNonTrendingAndNonTopItems = (
    items: PostItemsOne[]
  ): JSX.Element[] => {
    const filteredItems = items.filter(
      (item) => item.trending === 'false' && !item.top
    )

    return filteredItems.map((item) => (
      <PItemOne key={item._id} item={item} large={false} />
    ))
  }

  // for trending
  const filterTrendingItems = (items: PostItemsOne[]): JSX.Element[] => {
    const trendingItems = items.filter(
      (item: { trending: String }) => item.trending === 'true'
    )

    return trendingItems.map((item, index) => (
      <TrendingPosts key={item._id} index={index} item={item} />
    ))
  }

  return (
    <section id='posts' className='posts'>
      <div className='container' data-aos='fade-up'>
        {/* container */}
        <article className='row g-5'>
          {/* 1st  */}

          <div className='col-lg-4 ' data-aos='fade-left'>
            <PItemOne large={true} item={item} />
          </div>
          {/* end of 1st  */}

          {/* 2nd */}
          <article className='col-lg-8'>
            <div className='row g-5'>
              {/* 2nd-1 */}
              <div className='col-lg-4 border-start custom-border'>
                {items && items.length > 0 ? (
                  filterNonTrendingAndNonTopItems(items.slice(0, 4))
                ) : (
                  <PreLoader />
                )}
              </div>
              {/* 2nd-2 */}
              <article className='col-lg-4 border-start custom-border'>
                {items && items.length > 0 ? (
                  filterNonTrendingAndNonTopItems(items.slice(4, 7))
                ) : (
                  <PreLoader />
                )}
              </article>

              {/* 2nd-3 */}
              <article className='col-lg-4'>
                <div className='trending'>
                  <h3>Trending</h3>
                  <ul className='trending-post'>
                    {items && items.length > 0 ? (
                      filterTrendingItems(items)
                    ) : (
                      <PreLoader />
                    )}
                  </ul>
                </div>
              </article>
              {/* end of 2 */}
            </div>
          </article>

          {/* end */}
        </article>
      </div>
    </section>
  )
}

export default Posts
