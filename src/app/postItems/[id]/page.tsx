'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { PostItemsOne, initialPostProps } from '@/types'
import './style.css'
import Image from 'next/image'
import PreLoader from '@/components/PreLoader'
import { tabsData } from '@/data/data'
import SidePostItems from '@/components/SidePostItems'
import Link from 'next/link'
import { headers } from 'next/headers'
import Aos from 'aos'

const SinglePost = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const id: string = params.id

  const [post, setPost] = useState(initialPostProps)
  const [posts, setPosts] = useState([])
  const [tabs, setTabs] = useState(tabsData)

  // handle tab active
  const handleTab = (id: number): void => {
    setTabs(
      tabsData.map((tab) => {
        tab.active = false
        if (tab.id === id) {
          tab.active = true
        }
        return tab
      })
    )
  }

  // Get individual items from the [id]- route.ts
  const getSinglePost = async (id: string) => {
    try {
      const res = await axios(`/api/postitem/${id}`)
      const data = await res.data

      setPost(data)
      console.log(post)
    } catch (error: any | null) {
      console.log(error.message)
    }
  }

  // fetch all data
  const getAllPosts = async () => {
    try {
      const res = await axios('/api/postitem')
      const data = await res.data
      setPosts(data)
      console.log(posts)
    } catch (error: any | null) {
      console.log(error.message)
    }
  }

  // delete post
  const handleDeletePost = async (id: string) => {
    // delete post
    try {
      const res = await axios.delete(`/api/postitem/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = res.status
      if (result === 200) {
        console.log('Success', result)
        router.push('/postItems')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    getSinglePost(id)
    getAllPosts()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <main id='main'>
      <section className='single-post-content'>
        <div className='container' data-aos='zoom-in'>
          <div className='row'>
            <div className='col-md-9 post-content'>
              {/* each post */}
              {post && post.category ? (
                // article
                <div className='single-post'>
                  <div className='post-meta'>
                    <span className='date'>{post.category}</span>
                    <span className='mx-1'>
                      <i className='bi bi-dot'></i>
                    </span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US')}
                    </span>
                  </div>
                  <h1 className='mb-5'>{post.title}</h1>
                  <p>
                    <span className='firstcharacter'>
                      {post.brief && post.brief.charAt(0)}
                    </span>
                    {post.brief && post.brief.substring(1)}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi deserunt laboriosam ut vitae nisi, quidem alias esse
                    sint beatae tempora. Maiores quidem quod ut omnis enim
                    molestias quasi optio assumenda iusto, veritatis voluptates
                    quae ipsum minus aut. Ipsa cupiditate distinctio facere
                    nihil, aliquam deleniti libero! Placeat officia porro,
                    delectus impedit eaque fugiat illo magni ratione ducimus et
                    excepturi debitis explicabo?
                  </p>

                  <figure className='my-4'>
                    <Image
                      src={`/${post.img}`}
                      alt={post.title}
                      className='img-fluid'
                      width={700}
                      height={600}
                      // layout responsive will make the width and height set not matter
                      // layout='responsive'
                    />
                    <figcaption>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit, facilis.
                    </figcaption>
                  </figure>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere sint labore illum amet atque architecto eius nam
                    ipsum ratione nihil aliquam quae, asperiores magni incidunt
                    reprehenderit id! Maiores expedita perspiciatis, reiciendis
                    iusto illum id minima reprehenderit neque dolorem eius saepe
                    sit optio nemo laudantium laboriosam quo! Quibusdam nisi
                    explicabo error non ad, natus voluptatibus quo quas
                    architecto laudantium rem iusto, obcaecati repudiandae fuga
                    sapiente odit ex temporibus esse praesentium veniam corporis
                    numquam? Doloribus, distinctio mollitia, ipsum ducimus animi
                    delectus iure laboriosam consequuntur repudiandae
                    perferendis minima, reiciendis ea repellendus officia itaque
                    necessitatibus provident illo impedit ipsam totam rerum
                    architecto? Error, consectetur.
                  </p>
                  <p>
                    Dolor sit amet consectetur adipisicing elit. Sed at, dicta
                    quaerat, vero nihil obcaecati sapiente nemo tenetur expedita
                    iusto itaque eaque voluptates accusantium error magnam quasi
                    laborum ducimus dolorum quae. Consequatur eos hic deserunt
                    eveniet culpa vel! Consequuntur qui voluptatum,
                    reprehenderit debitis praesentium voluptates culpa optio
                    molestiae ea porro vitae reiciendis aperiam accusamus sint
                    enim non doloribus saepe a architecto! Rerum aperiam
                    asperiores magni itaque iste, repellendus harum mollitia!
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium nisi, neque iure labore non est, tempore ratione
                    eligendi voluptatem obcaecati quaerat omnis nobis! Magnam
                    adipisci quisquam porro quaerat, officiis animi.
                  </p>
                  <p>
                    Ipsum dolor sit amet consectetur adipisicing elit. Rem
                    commodi sit amet, soluta nam magni corporis! Porro nesciunt
                    ducimus aspernatur dolores maxime excepturi pariatur est ab!
                    In nulla accusamus repudiandae iusto laborum. Eius aut
                    aspernatur dolor mollitia voluptatibus inventore delectus
                    placeat quos corporis quae illum natus ducimus quisquam
                    eligendi expedita provident libero reiciendis laborum
                    doloremque ipsum, tempora sapiente. Ducimus molestiae
                    obcaecati officia quis adipisci totam porro corporis, maxime
                    itaque eius. Est, quae? Minima culpa eaque aperiam adipisci
                    quaerat est deserunt excepturi dicta eum dignissimos vero
                    atque laborum iste rerum dolore eveniet ipsa, mollitia iure
                    dolores quis veniam molestiae. Optio, et.
                  </p>
                  <div className='d-flex justify-content-center gap-4'>
                    <Link
                      onClick={() => handleDeletePost(id)}
                      href={``}
                      className='btn btn-primary'
                    >
                      <i className='bi bi-trash'></i>
                    </Link>

                    <Link
                      href={`/createpostitem/${id}`}
                      className='btn btn-primary'
                    >
                      <i className='bi bi-pen'></i>
                    </Link>
                  </div>
                </div>
              ) : (
                <PreLoader />
              )}
              {/* end of each post */}
            </div>
            {/* side Menu article */}
            <div className='col-md-3'>
              <div className='aside-block'>
                <ul className='nav nav-pills custom-tab-nav mb-4'>
                  {tabs.map((tab) => {
                    return (
                      <li key={tab.id} className='nav-item'>
                        <button
                          onClick={() => handleTab(tab.id)}
                          className={`nav-link ${
                            tab.active ? 'active' : undefined
                          }`}
                        >
                          {tab.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
                {/* tab content article */}
                <div className='tab-content'>
                  <div
                    className={`tab-pane fade ${
                      tabs[0].active ? 'show active' : ''
                    }`}
                  >
                    {posts.slice(0, 6).map((post: PostItemsOne) => {
                      return <SidePostItems key={post._id} post={post} />
                    })}
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tabs[1].active ? 'show active' : ''
                    }`}
                  >
                    {posts.slice(6, 12).map((post: PostItemsOne) => {
                      return <SidePostItems key={post._id} post={post} />
                    })}
                  </div>
                </div>
              </div>
              {/* video */}
              <div className='aside-block'>
                <h3 className='aside-title font-bold text-2xl mb-2'>Video</h3>
                <div className='video-post'>
                  <Link href='' target='_blank' className='link-video'>
                    <span className='bi-play-fill'></span>

                    <Image
                      src='/assets/img/post-landscape-3.jpg'
                      alt='post landscape'
                      className='img-fluid'
                      width={250}
                      height={250}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SinglePost
