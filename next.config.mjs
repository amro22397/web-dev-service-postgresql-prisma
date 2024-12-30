/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    experimental: {
        missingSuspenseWithCSRBailout: false,
      },    
    typescript: {
        ignoreBuildErrors: true,
    },
    
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    }
};

export default nextConfig;
