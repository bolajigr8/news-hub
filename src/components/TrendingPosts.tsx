import Link from 'next/link'
import './css/trendingPost.css'
import { PostItemsOne } from '@/types'

const TrendingPosts = ({
  item,
  index,
}: {
  item: PostItemsOne
  index: number
}) => {
  return (
    <li>
      <Link href={`/api/postman/${item._id}`}>
        <span className='number'>{index + 1}</span>
        <h3>{item.title}</h3>
        <span className='author'>{item.author}</span>
      </Link>
    </li>
  )
}

export default TrendingPosts
