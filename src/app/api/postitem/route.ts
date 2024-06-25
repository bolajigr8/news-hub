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
export async function POST(request: Request) {
  const postItem = await request.json()

  try {
    // copy everything in the postItems and save
    const savedItem = await new PostItem({ ...postItem }).save()
    // we are giving a file and it must be in JSOn format
    return new NextResponse(JSON.stringify(savedItem), {
      headers: {
        'Content-Type': 'application/json ',
      },
      status: 201,
    })
  } catch (error) {
    console.log('failed to post request')
    return new NextResponse(JSON.stringify({ message: 'SERVER ERROR' }), {
      status: 500,
    })
  }
}
