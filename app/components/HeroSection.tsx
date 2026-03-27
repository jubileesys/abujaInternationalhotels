'use client';

import Image from "next/image";
import PortfolioSection from "./PortfolioSection";

export default function HeroSection() {
  return (
    <div className="flex flex-col ">
      {/* Visual Part - Hero Image */}
      <div className="relative aspect-video md:aspect-none md:h-[75vh] w-full overflow-hidden bg-gray-900">
        <Image
          src="/fullview-main.png"
          alt="Abuja International Hotels Luxury"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/10 md:bg-black/20" />

        {/* Scroll Indicator - Hidden on very small heights to avoid clutter */}
        <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/70 rounded-full flex justify-center pt-1 md:pt-2">
            <div className="w-1 h-2 md:w-1 md:h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <PortfolioSection />

    </div>
  );
}
