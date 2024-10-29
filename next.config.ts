import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'docs',
    assetPrefix: isDev ? undefined : 'https://github.com/Nilton667/nilton667.github.io/tree/main/docs',
    images: { unoptimized: true } 
  }; 
  
  return nextConfig;
}