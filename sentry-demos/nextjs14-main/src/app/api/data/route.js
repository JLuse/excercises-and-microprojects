import { NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs'

export async function GET() {

  setTimeout(() => {

    Sentry.metrics.set("user_view", "jane");

  }, 2000)
  
  Sentry.metrics.increment("button_click", 1, {
    tags: { browser: "Firefox", app_version: "1.0.0" },
  });

  return NextResponse.json({ message: 'Hello, this is your API response!' });
}