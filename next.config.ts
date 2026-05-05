import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        }
    },
    /* config options here */
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'covers.openlibrary.org'},
            {protocol: 'https', hostname: 'qsxidgry97f1oguc.public.blob.vercel-storage.com', pathname: '/**'}
        ]
    }
};

export default nextConfig;
