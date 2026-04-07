'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Rocket, Globe, Building2, UserCheck } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import MissionVision from '@/app/components/ui/MissionVision';

const strategicPillars = [
  {
    title: 'Geographically Diverse Portfolio',
    description: 'Our collection of iconic and irreplaceable assets is located in prime metropolitan and resort locations across Nigeria.',
    icon: Globe
  },
  {
    title: 'Irreplaceable Assets',
    description: 'Strategically acquired and maintained luxury assets with high barriers to entry and long-term value appreciation.',
    icon: Building2
  },
  {
    title: 'Industry-Leading Teams',
    description: 'Our properties are managed by some of the most recognized and prestigious brand names in the global hospitality industry.',
    icon: UserCheck
  }
];

const quickLinks = [
  {
    title: 'Our Leadership',
    description: 'Our executive team is comprised of highly experienced leaders from the hospitality, real estate, and finance sectors.',
    href: '/about/leadership'
  },
  {
    title: 'Corporate Governance',
    description: 'We are committed to the highest standards of integrity, transparency, and accountability in all our business practices.',
    href: '/about/governance'
  },
  {
    title: 'Our History',
    description: 'Relive the legacy and milestones that have shaped Abuja International Hotels into the premier hospitality group it is today.',
    href: '/about/history'
  }
];

const companyNews = [
  { date: 'FEB 19, 2026', title: 'Abuja International Hotels Named to Forbes "Best Employers" List for 2026' },
  { date: 'JAN 28, 2026', title: 'Abuja International Hotels Finalizes Acquisition of the Royal Palm Beach Resort' },
  { date: 'DEC 15, 2025', title: 'Abuja International Hotels Announces Record-Breaking Occupancy Rates for 2025 Holiday Season' }
];

export default function CompanyOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/nicon.png" // Abuja Skyline / Urban Landscape
            alt="Company Overview Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      <Breadcrumbs
        items={[
          { title: 'Home', href: '/' }
        ]}
        currentPage="Company Overview"
      />

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-12 uppercase tracking-tight"
        >
          Overview and history
        </motion.h1>
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-500 font-sans leading-relaxed mb-16">
          Abuja International Hotels Plc offers unparalleled luxury and comfort in the heart of
          Abuja. A premier destination for business and leisure. set against the spectacular
          backdrop of Aso Rock, right at the center of the Federal Capital
          Territory. The hotel came into existence as a result of Nigeria’s hosting
          of the Commonwealth Head of Government Meeting (CHOGM) in 2003
          as it received the privilege to accommodate members of the
          Commonwealth Business Forum
        </p>
      </section>
      <MissionVision />





      {/* Careers Banner */}
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a2b4b] z-0" />
        <div className="relative z-10 max-w-4xl px-6">
          <h2 className="text-3xl md:text-5xl font-quicksand text-white mb-8 uppercase tracking-tight">Explore a Career with Us</h2>
          <p className="text-sm md:text-lg text-gray-300 font-sans leading-relaxed mb-10">
            Our company culture and benefits provide an employee experience that is second-to-none. Join a team whose focus and goals can be summarized in three words: Best-in-Class.
          </p>
          <button className="bg-[#c4a062] hover:bg-[#b38f51] text-white px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all rounded-sm shadow-2xl">
            Learn More
          </button>
        </div>
      </section>



      {/* Property Spotlight */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0">
          <img
            src="/hero-img.jpg"
            alt="Feature Property"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* <div className="relative z-10 w-full max-w-2xl mx-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-md p-12 md:p-20 text-center shadow-2xl relative"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-6 block">Featured Property</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a2b4b] mb-12 uppercase tracking-tight">The Imperial Abuja</h2>
            <div className="w-16 h-px bg-[#DC833D] mx-auto mb-12" />
            <p className="text-sm md:text-base text-gray-500 font-sans leading-relaxed mb-12">
              Discover the pinnacle of luxury in our geographically diverse portfolio of iconic and irreplaceable assets.
            </p>
            <button className="bg-[#1a2b4b] text-white px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#DC833D] transition-colors rounded-sm shadow-xl">
              Explore  Products and Services
            </button>
          </motion.div>
        </div> */}
      </section>

      <InvestorMaterial />
    </main>
  );
}
