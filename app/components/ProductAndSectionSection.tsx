'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export default function ProductAndSectionSection() {
  return (
    <div className=" ">


      {/* Portfolio Section */}
      <div className="bg-white px-4 py-16 md:px-8 lg:px-16 max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20 pb-16">
          {/* Header Section */}
          <div className="flex flex-col space-y-6 max-w-4xl group transition-all duration-700">
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-[#DC833D]" />
                <span className="text-[#DC833D] font-sans text-xs md:text-sm font-bold tracking-[0.4em] uppercase block">

                </span>
              </div>
              <h2 className="text-[#1a2b4b] font-quicksand text-4xl md:text-6xl lg:text-8xl font-light group-hover:text-[#DC833D] transition-colors uppercase leading-[0.9] tracking-tighter">
                Abuja <br /> International <br /> <span className="font-bold text-[#1a2b4b]">Hotels Plc</span>
              </h2>
            </div>


          </div>

          {/* Action Card */}
          <div className="shrink-0 w-full lg:w-auto">
            <Link href="/products-and-services" className="bg-[#1a2b4b] text-white p-10 md:p-12 rounded-sm flex flex-col items-center justify-center space-y-5 group hover:bg-[#15233d] transition-all duration-500 shadow-2xl relative overflow-hidden lg:min-w-[320px] min-h-[220px]">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#DC833D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              <div className="text-center space-y-1">
                <span className="text-[10px] font-bold text-[#DC833D] tracking-[0.3em] uppercase">Explore</span>
                <h3 className="text-sm md:text-base font-bold font-quicksand tracking-[0.4em] uppercase leading-relaxed">
                  Our Products <br /> & Services
                </h3>
              </div>
              <motion.div
                whileHover={{ x: 10 }}
                className="text-[#DC833D] mt-2"
              >
                <ArrowRight className="w-8 h-8" />
              </motion.div>
            </Link>
          </div>
        </div>


        {/* Bottom Row: News Banner */}
        <Link href="/investors/results" className="flex flex-col md:flex-row justify-between items-center py-10 px-6 group border border-[#DC833D]/30 hover:bg-[#1a2b4b] transition-all duration-500 rounded-sm">
          <div className="flex flex-col space-y-2 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-[#162136] font-quicksand font-bold text-lg md:text-xl tracking-tight group-hover:text-white transition-colors">
              Abuja International Hotels Q4 2025 Earnings Performance
            </p>
            <p className="text-[#DC833D] text-[10px] font-bold tracking-widest uppercase group-hover:text-white/80 transition-colors">
              Corporate Announcement • February 19, 2026
            </p>
          </div>
          <div className="flex items-center space-x-3 text-[10px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#DC833D] transition-all group-hover:text-white">
            <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-[#DC833D] group-hover:after:bg-white group-hover:after:w-full after:transition-all after:duration-300">
              Review Performance
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>


    </div>
  );
}
