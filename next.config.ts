import type { NextConfig } from "next";  

const nextConfig: NextConfig = {  
  reactStrictMode: true, //Enables React Strict Mode for improved debugging  
  /* config options here */  
  images: {  
    domains: ['cdn.dummyjson.com','plus.unsplash.com'],  
  },  
};  

export default nextConfig;  