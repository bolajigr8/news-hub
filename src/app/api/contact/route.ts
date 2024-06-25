import { NextResponse } from 'next/server'
import dbConnect from '../../../../config/db'
import Contact from '../../../../models/Contact'

dbConnect()

export async function GET() {
  try {
    // we want to remove version (_v)
    const contactItems = await Contact.find().select('-__v')
    return NextResponse.json(contactItems, { status: 200 })
  } catch (error) {
    return NextResponse.json('error in finding items', { status: 500 })
  }
}

// post
export async function POST(request: Request) {
  const contactItem = await request.json()

  try {
    // copy everything in the Contact and save
    const savedItem = await new Contact({ ...contactItem }).save()
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
