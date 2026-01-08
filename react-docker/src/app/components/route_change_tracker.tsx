"use client"

import { useEffect } from 'react';
import ReactGA from "react-ga4";

export default function RouteChangeTracker() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) {
      console.warn('[GA] NEXT_PUBLIC_GA_ID is not set; analytics disabled');
      return;
    }
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
  }, []);

  return null;
}
