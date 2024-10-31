import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (phase: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const nextConfig: NextConfig = {
  }; 
  
  return nextConfig;
}