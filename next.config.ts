import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'docs',
    assetPrefix: isDev ? undefined : 'https://nilton667.github.io', 
  }; 
  
  return nextConfig;
}