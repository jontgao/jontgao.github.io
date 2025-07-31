import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)