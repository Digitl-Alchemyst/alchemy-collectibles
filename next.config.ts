import {withSentryConfig} from '@sentry/nextjs';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'lh3.googleusercontent.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: '<project-name>.s3.amazonaws.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.sanity.io',
      // },
    ],
  },
  // These could cause issue may remove
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    // * This is used for Sentry to prevent leakage to the client Read more about taint APIs here: https://nextjs.org/blog/security-nextjs-server-components-actions#server-only
    taint: true,
    // typedRoutes: true,
  },
};
