import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers";
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken");
  if(!accessToken){
      return NextResponse.redirect(new URL('/login', request.url))
  }
  
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*'],
 
}