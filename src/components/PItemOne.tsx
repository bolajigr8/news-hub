import Link from 'next/link'
import Image from 'next/image'
import './css/postItemOne.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { PostItemsOne } from '@/types'

const PItemOne = ({ item, large }: { item: PostItemsOne; large: boolean }) => {
  const { _id, img, category, date, title, brief, avatar, author } = item

  return (
    <section key={_id} className={`post-entry-1 ${large ? 'lg' : undefined}`}>
      <Link href={`postItems/${_id}`}>
        <img src={`/${img}`} alt={title} className='img-fluid' />
      </Link>

      <div className='post-meta'>
        <span className='date'>{category}</span>
        <span className='mx-1'>
          <i className='bi bi-dot'></i>
        </span>
        <span>{new Date(date).toLocaleDateString('en-US')}</span>
      </div>
      <h2>
        <Link href={`postItems/${_id}`}>{title}</Link>
      </h2>

      {large ? (
        <>
          <p className='mb-4 d-block'>{brief}</p>

          <article className='d-flex align-items-center author'>
            <div className='photo'>
              <img src={avatar} alt={title} className='img-fluid' />
            </div>
            <div className='name'>
              <h3 className='m-0 p-0'>{author}</h3>
            </div>
          </article>
        </>
      ) : null}
    </section>
  )
}

export default PItemOne
