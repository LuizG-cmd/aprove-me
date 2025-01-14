import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:'eaassets-a.akamaihd.net'
      }
      
    ]
  }
};

export default nextConfig;
