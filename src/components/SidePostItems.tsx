import { PostItemsOne } from '@/types'
import Link from 'next/link'
import './css/postItemOne.css'

const SidePostItems = ({ post }: { post: PostItemsOne }) => {
  return (
    <div className='post-entry-1 side-post border-bottom'>
      <div className='post-meta side-post'>
        <span className='date'>{post.category}</span>
        <span className='mx-1'>
          <i className='bi bi-dot'></i>
        </span>
        <span>{new Date(post.date).toLocaleDateString('en-US')}</span>
      </div>
      <h2 className='mb-2'>
        <Link href={`/postItems/${post._id}`}>{post.title}</Link>
      </h2>
      {post.author && (
        <span className='author mb-3 d-block'>{post.author}</span>
      )}
    </div>
  )
}

export default SidePostItems
