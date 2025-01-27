import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)', 
    '/sign-up(.*)', 
    '/forgot-password(.*)', 
    '/' 
  ]);

  export default clerkMiddleware(async (auth, request) => {
    // Skip authentication check for public routes
    if (!isPublicRoute(request)) {
      await auth.protect()  // Protect all non-public routes
    }
  })
  
  export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
      // Include the public routes here to ensure they are skipped by the middleware
      '/sign-in(.*)',
      '/sign-up(.*)',
      '/forgot-password(.*)',  
      '/',  // Make the '/' route public
    ],
  }