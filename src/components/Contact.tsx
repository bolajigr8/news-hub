'use client'

import { useState, useEffect } from 'react'
import { initialContactState } from '@/data/data'
import axios from 'axios'

import Aos from 'aos'

const Contact = () => {
  const [text, setText] = useState(initialContactState)

  // for each input
  const handleTextChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setText({ ...text, [name]: value, validate: '' })
  }

  // new submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Simple form validation
    if (
      text.name === '' ||
      text.email === '' ||
      text.subject === '' ||
      text.message === ''
    ) {
      setText({ ...text, validate: 'incomplete' })
      return
    }

    // Set loading state
    setText({ ...text, validate: 'loading' })

    // Send Contact request
    try {
      const res = await axios.post('/api/contact', text, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = res.status

      if (result === 201) {
        setText({ ...text, validate: 'success' })

        console.log('Success', result)
      }
    } catch (error) {
      setText({ ...text, validate: 'error' })
      console.log('Error', error)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <main id='main'>
      <div className='create-post-content'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-10'>
              <div className='row d-flex justify-content-center mt-5'>
                <div className='col-lg-12'>
                  <div className='row'>
                    <div className='col-lg-12 text-center mb-5'>
                      <h2 className='page-title' data-aos='fade-up'>
                        Contact Us
                      </h2>
                    </div>
                  </div>
                  {/* form */}
                  {/* TO get type of e = onSubmit={(e) => console.log(e)} */}
                  <form
                    data-aos='fade-up'
                    onSubmit={handleSubmit}
                    className='mb-[5rem]'
                  >
                    <div className='row'>
                      {/* one  input */}
                      <div className='col-lg-6 mb-3'>
                        <label className='font-bold'>Your Name</label>
                        <input
                          type='text'
                          name='name'
                          placeholder='eg.  bolaji adebayo'
                          className='form-control'
                          value={text.name}
                          onChange={handleTextChange}
                        />
                      </div>
                      {/* one  input */}
                      <div className='col-lg-6 mb-3'>
                        <label className='font-bold'>Email</label>
                        <input
                          type='text'
                          name='email'
                          placeholder='eg.  bolajiadebayo@gmail.com'
                          className='form-control'
                          value={text.email}
                          onChange={handleTextChange}
                        />
                      </div>
                      {/* one  input */}
                      <div className='col-lg-6 mb-3'>
                        <label className='font-bold'>Subject</label>
                        <input
                          type='text'
                          name='subject'
                          placeholder='eg.  Food'
                          className='form-control'
                          value={text.subject}
                          onChange={handleTextChange}
                        />
                      </div>

                      {/* text area */}
                      <div className='col-12 mb-3'>
                        <label className='font-bold'>Message</label>
                        <textarea
                          onChange={handleTextChange}
                          value={text.message}
                          className='form-control'
                          name='message'
                          cols={30}
                          rows={10}
                          placeholder='Enter Message'
                        ></textarea>
                      </div>
                      {/* form validation */}
                      <div className='mb-3'>
                        {/* loading */}
                        {text.validate === 'loading' && (
                          <div className='loading text-yellow-300'>
                            Sending...
                          </div>
                        )}
                        {/* Incomplete Data */}
                        {text.validate === 'incomplete' && (
                          <div className='error-message text-red-500'>
                            Please fill in all the above details{' '}
                          </div>
                        )}
                        {/* success */}
                        {text.validate === 'success' && (
                          <div className='sent-message text-green-500'>
                            Your contact was successfully sent, Thank You!
                          </div>
                        )}
                        {/* error */}
                        {text.validate === 'error' && (
                          <div className='error-message text-red-500'>
                            Server Error
                          </div>
                        )}
                      </div>

                      {/* Button */}
                      <div className='col-12 d-flex justify-content-center'>
                        <button type='submit' className='btn btn-primary'>
                          Save Contact
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

export default Contact
