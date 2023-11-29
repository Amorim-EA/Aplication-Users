'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = async (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDashboard = new URL('/pages/dashboard', request.url);
    const isTokenValidated = await validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard' || request.nextUrl.pathname === '/pages/dashboard/register' || request.nextUrl.pathname === '/pages/dashboard/alter') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if(isTokenValidated) {
      if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDashboard);
      }
    }

    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/dashboard/register', '/pages/dashboard/alter']
};

