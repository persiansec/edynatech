import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 // output: "export", // خروجی استاتیک برای هاست‌های بدون Node.js
  images: {
    unoptimized: true, // غیرفعال کردن بهینه‌سازی تصاویر
  },
  trailingSlash: true, // برای اطمینان از درست کار کردن مسیرها در هاست‌های اشتراکی
};

export default nextConfig;
