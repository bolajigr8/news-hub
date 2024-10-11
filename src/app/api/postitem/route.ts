import { NextResponse } from 'next/server'
import dbConnect from '../../../../config/db'
import PostItem from '../../../../models/PostItem'

dbConnect()

export async function GET() {
  try {
    // we want to remove version (_v)
    const postItems = await PostItem.find().select('-__v')
    return NextResponse.json(postItems, { status: 200 })
  } catch (error) {
    return NextResponse.json('error in finding items', { status: 500 })
  }
}

// post

// POST request handler
export async function POST(request: Request) {
  const postItems = await request.json()

  // Check if the incoming data is an array
  if (Array.isArray(postItems)) {
    try {
      //  save all the items at once
      const savedItems = await PostItem.insertMany(postItems)

      return new NextResponse(JSON.stringify(savedItems), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 201,
      })
    } catch (error) {
      console.error('Failed to save post items', error)

      return new NextResponse(JSON.stringify({ message: 'SERVER ERROR' }), {
        status: 500,
      })
    }
  } else {
    // If it's not an array, return an error message
    return new NextResponse(
      JSON.stringify({ message: 'Invalid data format, expected an array' }),
      {
        status: 400,
      }
    )
  }
}

// this old method did not give an allowance to send an array only one by one

// export async function POST(request: Request) {
//   const postItem = await request.json()

//   try {
//     // copy everything in the postItems and save
//     const savedItem = await new PostItem({ ...postItem }).save()
//     // we are giving a file and it must be in JSOn format
//     return new NextResponse(JSON.stringify(savedItem), {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       status: 201,
//     })
//   } catch (error) {
//     console.log('failed to post request')
//     return new NextResponse(JSON.stringify({ message: 'SERVER ERROR' }), {
//       status: 500,
//     })
//   }
// }
