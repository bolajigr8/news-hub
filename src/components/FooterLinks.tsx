import Link from 'next/link'
import React from 'react'

const FooterLinks = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link className='block text-white' href={link}>
      {'> '} {name}
    </Link>
  )
}

export default FooterLinks
