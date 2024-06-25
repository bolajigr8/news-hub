'use client'
import { useState } from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'
import './css/header.css'
import Sci from './Sci'
import SearchForm from './SearchForm'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [on, setOn] = useState(false)
  // handleForm open
  const handleFormOpen = (e: Event | any) => {
    e.preventDefault()
    setOpen(!open)
  }

  // mobile view btn handling
  const handleToggleMenu = () => {
    setOn(!on)
    let body: HTMLElement | any = document.querySelector('body')
    // adding class to the body
    body.classList.toggle('mobile-nav-active')
  }

  return (
    <header id='header' className='header d-flex align-items-center fixed-top'>
      <div className='container-fluid container-xl d-flex align-items-center justify-content-between '>
        <Link href='/' className='logo d-flex align-items-center'>
          {/* svg */}
          <h1>Digital News</h1>
        </Link>
        <NavLinks />
        <div className='position-relative flex '>
          <Sci />
          <Link
            className='mx-2 js-search-open'
            href={''}
            onClick={handleFormOpen}
          >
            <span className='bi-search'></span>
          </Link>
          {on ? (
            <i
              className='bi bi-x mobile-nav-toggle'
              onClick={handleToggleMenu}
            ></i>
          ) : (
            <i
              className='bi bi-list mobile-nav-toggle'
              onClick={handleToggleMenu}
            ></i>
          )}

          <SearchForm active={open} formOpen={handleFormOpen} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
