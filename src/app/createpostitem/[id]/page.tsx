'use client'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { initialCreatePostState } from '@/data/data'
import Aos from 'aos'

const EditPostItem = ({ params }: { params: { id: string } }) => {
  const id = params.id

  const [text, setText] = useState(initialCreatePostState)

  // get existing single post data
  const getSinglePost = async () => {
    try {
      const res = await axios.get(`/api/postitem/${id}`)
      const data = await res.data
      setText(data)
      console.log(text)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  // handle text change -- Here we make the put request
  const handleTextChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setText({ ...text, [name]: value, validate: '' })
  }

  // submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Simple form validation
    if (
      text.title === '' ||
      text.img === '' ||
      text.category === '' ||
      text.brief === ''
    ) {
      setText({ ...text, validate: 'incomplete' })
      return
    }

    // Set loading state
    setText({ ...text, validate: 'loading' })

    // Send PUT request -- because we are updating
    try {
      const res = await axios.put(`/api/postitem/${id}`, text, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = res.status

      if (result === 200) {
        setText({ ...text, validate: 'success' })
        console.log('Success', result)
      }
    } catch (error) {
      setText({ ...text, validate: 'error' })
      console.log('Error', error)
    }
  }

  useEffect(() => {
    getSinglePost()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <main id='main'>
      <div className='create-post-content'>
        <div className='container' data-aos='fade-up'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-10'>
              <div className='row d-flex justify-content-center mt-5'>
                <div className='col-lg-12'>
                  <div className='row'>
                    <div className='col-lg-12 text-center mb-5'>
                      <h2 className='page-title'>Edit Post</h2>
                    </div>
                  </div>
                  {/* form */}
                  {/* TO get type of e = onSubmit={(e) => console.log(e)} */}
                  <form onSubmit={handleSubmit} className='mb-[5rem]'>
                    <div className='row'>
                      {/* one  input */}
                      <div className='col-lg-6 mb-3'>
                        <label className='font-bold'>Title</label>
                        <input
                          type='text'
                          name='title'
                          placeholder='Enter Title'
                          className='form-control'
                          value={text.title}
                          onChange={handleTextChange}
                        />
                      </div>
                      {/* one  input */}
                      <div className='col-lg-6 mb-3'>
                        <label className='font-bold'>Image URL</label>
                        <input
                          type='text'
                          name='img'
                          placeholder='Enter Image URL'
                          className='form-control'
                          value={text.img}
                          onChange={handleTextChange}
                        />
                      </div>
                      {/* one  input */}
                      <div className='col-lg-6 mb-3'>
                        <label className='font-bold'>Category</label>
                        <input
                          type='text'
                          name='category'
                          placeholder='Enter Your Post Category'
                          className='form-control'
                          value={text.category}
                          onChange={handleTextChange}
                        />
                      </div>
                      {/* one  input */}
                      <div className='col-lg-6 mb-3'>
                        <label className='font-bold'>Author</label>
                        <input
                          type='text'
                          name='author'
                          placeholder='Enter Author'
                          className='form-control'
                          value={text.author}
                          onChange={handleTextChange}
                        />
                      </div>
                      {/* text area */}
                      <div className='col-12 mb-3'>
                        <label className='font-bold'>Brief</label>
                        <textarea
                          onChange={handleTextChange}
                          value={text.brief}
                          className='form-control'
                          name='brief'
                          cols={30}
                          rows={10}
                          placeholder='Enter Post Brief'
                        ></textarea>
                      </div>
                      {/* form validation */}
                      <div className='mb-3'>
                        {/* loading */}
                        {text.validate === 'loading' && (
                          <div className='loading'>Sending Post...</div>
                        )}
                        {/* Incomplete Data */}
                        {text.validate === 'incomplete' && (
                          <div className='error-message'>
                            Please fill in all the above details{' '}
                          </div>
                        )}
                        {/* success */}
                        {text.validate === 'success' && (
                          <div className='sent-message'>
                            Your news was successfully updated, Weldone!
                          </div>
                        )}
                        {/* error */}
                        {text.validate === 'error' && (
                          <div className='error-message'>Server Error</div>
                        )}
                      </div>

                      {/* Button */}
                      <div className='col-12 d-flex justify-content-center'>
                        <button type='submit' className='btn btn-primary'>
                          update Item
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default EditPostItem
