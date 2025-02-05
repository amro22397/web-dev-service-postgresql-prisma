import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();


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

export default withNextIntl(nextConfig);

