import Link from 'next/link'
import './css/nav.css'
import { navs } from '@/data/data'
import Image from 'next/image'

const NavLinks = () => {
  return (
    <nav id='navbar' className='navbar'>
      <ul>
        {navs.map((nav) => {
          return (
            <li key={nav.id}>
              <Link href={nav.link}>
                {nav.name === 'Home' ? (
                  <Image
                    src='/house-door-fill.svg'
                    width={15}
                    height={15}
                    alt='house-door-fill'
                  />
                ) : (
                  nav.name
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavLinks
