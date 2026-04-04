'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black mt-10">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/*  <p className="text-[#DC833D] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
            A New Perspective
          </p> */}
          <h2 className="text-3xl md:text-6xl font-quicksand text-white max-w-4xl tracking-tight uppercase">
            Experience the Grandeur in Every Detail
          </h2>
          {/*   <div className="pt-8">
            <button className="px-8 py-3 bg-[#DC833D] text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#b09360] transition-colors rounded-sm">
              Discover Our World
            </button>
          </div> */}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-down from-transparent via-[#DC833D] to-transparent" />
      </div>
    </section>
  );
}
