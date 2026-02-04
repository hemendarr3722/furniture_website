import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { message: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (phone.length < 10) {
      return NextResponse.json(
        { message: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    console.log('Contact form submission:', { name, phone, message });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
