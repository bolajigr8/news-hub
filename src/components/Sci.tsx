import { scis } from '@/data/data'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Sci = () => {
  return (
    <div>
      {scis.map((sci) => {
        return (
          <Link key={sci.id} href={sci.link} target='_blank' className='mx-2'>
            <span className={sci.icon}></span>
          </Link>
        )
      })}
    </div>
  )
}

export default Sci
