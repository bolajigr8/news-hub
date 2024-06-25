// this is for individual items
import { NextResponse } from 'next/server'
import dbConnect from '../../../../../config/db'
import PostItem from '../../../../../models/PostItem'
import { headers } from 'next/headers'

dbConnect()

// get request for each post
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postItem = await PostItem.findById(params.id).select('-__v')

    return NextResponse.json(postItem)
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'No item found with this ID' }),
      { status: 404 }
    )
  }
}

// PUT request ----updating a post
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const updatedItem = await request.json()
  try {
    const postItem = await PostItem.findByIdAndUpdate(params.id, {
      ...updatedItem,
    })

    if (!postItem) {
      return new NextResponse(
        JSON.stringify({ message: 'No Item found for this ID' }),
        { status: 404 }
      )
    }

    return new NextResponse(JSON.stringify(postItem), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    })
  } catch (error: any) {
    console.log(error.message)
    return new NextResponse(JSON.stringify({ message: 'SERVER ERROR' }), {
      status: 500,
    })
  }
}

// DELETE request ----deleting a post
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  try {
    const postItem = await PostItem.findByIdAndDelete(id)

    if (!postItem) {
      return new NextResponse(
        JSON.stringify({ message: 'No Item found for this ID' }),
        { status: 404 }
      )
    }

    return new NextResponse(JSON.stringify(postItem), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    })
  } catch (error: any) {
    console.log(error.message)
    return new NextResponse(JSON.stringify({ message: 'SERVER ERROR' }), {
      status: 500,
    })
  }
}
