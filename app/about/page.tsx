import { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutClient";

// --- SEO metadata ---
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "درباره ما | الکترودایناتک",
    description:
      "با الکترودایناتک بیشتر آشنا شوید — تاریخچه، ماموریت، ارزش‌ها و تعهد ما به کیفیت، نوآوری و رشد پایدار در صنایع ایران.",
    openGraph: {
      title: "درباره ما | الکترودایناتک",
      description:
        "تاریخچه، ماموریت و ارزش‌های شرکت سیلیس نگین اصفهان — پیشرو در توسعه فناوری‌های صنعتی و هوشمند.",
      url: "https://example.com/about",
      images: [
        {
          url: "/statics/company-history.jpg",
          width: 1200,
          height: 630,
          alt: "درباره الکترودایناتک",
        },
      ],
    },
  };
}

export default async function AboutPage() {
  return <AboutPageClient />;
}
