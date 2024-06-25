import { PostItemsOne } from '@/types'
import Image from 'next/image'

const FooterPosts = ({ item }: { item: PostItemsOne }) => {
  return (
    <div className='flex items-center space-x-4 mt-2'>
      <Image src={`/${item.img}`} width={50} height={50} alt={item.title} />

      <div>
        <div className='text-sm text-gray-400'>
          {item.category} • {item.date}
        </div>
        <h3 className='text-sm font-semibold max-w-[23rem]'>{item.title}</h3>
      </div>
    </div>
  )
}

export default FooterPosts
