'use client'
import { useEffect, useState } from 'react';
import * as Sentry from '@sentry/nextjs'

async function fook() {
  console.log('FOOK')
}

export default function AboutPage() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {

      Sentry.metrics.set("user_view", "jane");
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setApiResponse(data.message);
      } catch (error) {
        console.error('Failed to fetch API data:', error);
        setApiResponse('Failed to fetch data');
      }
    }

    fetchData();
  }, []);

  

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the About page!</p>
      <p>API Response: {apiResponse || "Loading..."}</p>
      <button onClick={fook}>FOOK</button>
    </div>
  );
}