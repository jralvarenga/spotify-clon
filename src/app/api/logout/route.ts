import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export function GET() {
  cookies().delete('access_token')
  cookies().delete('refresh_token')
  cookies().delete('token_saved_at')

  redirect('/login')
}