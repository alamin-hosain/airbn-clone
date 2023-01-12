/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.stickpng.com", "links.papareact.com", "a0.muscache.com"],
  },
  env: {
    map_api_key:
      "pk.eyJ1IjoiYWxhbWluaG9zc2FpbmltIiwiYSI6ImNsY3NzNHZmNzBkeHIzb3MxdzIydWRpb3gifQ.GI2SJrs55S8IB7HLiluSvg",
  },
};

module.exports = nextConfig;
