import Link from 'next/link'

const HeroSlide = ({
  slide,
}: {
  slide: { bgImg: string; title: string; brief: string }
}) => {
  return (
    <Link
      href='#'
      className='img-bg d-flex align-items-end'
      style={{ backgroundImage: `url(/${slide.bgImg})` }}
    >
      <div className='img-bg-inner'>
        <h2>{slide.title}</h2>
        <p>{slide.brief}</p>
      </div>
    </Link>
  )
}

export default HeroSlide
