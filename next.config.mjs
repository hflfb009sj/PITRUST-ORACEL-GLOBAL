/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // هذا الجزء مهم للسماح بتشغيل التطبيق داخل الـ Iframe الخاص بمتصفح Pi
    images: {
        unoptimized: true,
    },
};

export default nextConfig;