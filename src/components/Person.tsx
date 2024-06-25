import Image from 'next/image'

const Person = ({
  title,
  name,
  src,
}: {
  title: string
  name: string
  src: string
}) => {
  return (
    <div className='text-center mb-4 '>
      <Image
        width={100}
        height={100}
        src={src}
        alt={name}
        className='blog-img      object-cover rounded-full mb-4 shadow-md  mx-auto'
      />

      <h1 className='font-bold text-lg'>{name}</h1>
      <p className=' text-sm'>{title}</p>
      <p className='max-w-[23rem] mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius
        itaque blanditiis voluptatibus vel accusamus, sequi commodi quaerat
        laborum dolorum.
      </p>
    </div>
  )
}

export default Person
