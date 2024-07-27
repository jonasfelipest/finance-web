"use client"
import { useState, useEffect } from 'react';

interface Preferences {
  categories: string[];
  colors: string[];
  status: string[];
  goals: string[];
  layout: string[];
}

export default function Home() {
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  useEffect(() => {
    fetch('/api/preferences')
      .then(response => response.json())
      .then(data => setPreferences(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Financial Management App</h1>
      {preferences ? (
        <pre>{JSON.stringify(preferences, null, 2)}</pre>
      ) : (
        <p>Loading preferences...</p>
      )}
    </div>
  );
}
