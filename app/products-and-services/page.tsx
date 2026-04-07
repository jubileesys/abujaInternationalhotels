'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import { ArrowRight, Users, Sparkles, Trophy } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
    {
        title: "Luxury Lodging",
        description: "253 guestrooms from Classic to Presidential Suites. ",
        image: "/lodge-img1.jpeg",
        linkText: "Explore Accommodations",
        linkHref: "/contact",
        targetAudience: "Business Travelers, diplomats and families",
        keyBenefits: "Privacy, comfort, and a 'home away from home' environment",
        differentiators: "Unique views of Aso rock and city skyline from private balconies"
    },
    {
        title: "Conference & Events",
        description: "Over 900 sqm of event space including a conference hall. ",
        image: "/conference-img.jpg",
        linkText: "Plan an Event",
        linkHref: "/contact",
        targetAudience: "Government bodies, NGOs and corporate organizations",
        keyBenefits: "Seamless execution of high-profile events with full audio visual support",
        differentiators: "Direct, Secure pedestrian access to the international conference centre"
    },
    {
        title: "Fine Dining",
        description: "Restaurants serving Nigerian and International cuisines. ",
        image: "/fine-img.jpeg",
        linkText: "Discover Dining",
        linkHref: "/contact",
        targetAudience: "Food enthusiasts and guests hosting formal dinners",
        keyBenefits: "High quality culinary experiences within a secure environment",
        differentiators: "Famous weekend poolside barbecues with live music and local flavours"
    },
    {
        title: "Wellness & Spa",
        description: "Full-Service health club with massages, sauna and beauty treatments.",
        image: "/spa-img.jpg",
        linkText: "Explore Wellness",
        linkHref: "/contact",
        targetAudience: "Long stay guests and local members seeking rejuvenation",
        keyBenefits: "Promotes mental and physical wellbeing in a serene setting",
        differentiators: "Comprehensive facilities including steam room and professional therapists"
    },
    {
        title: "Sports & Leisure",
        description: "Outdoor pool, tennis/squash courts and an on-site casino and night club. ",
        image: "/pool-img.png",
        linkText: "Explore Leisure",
        linkHref: "/contact",
        targetAudience: "Active travelers and socialites looking for entertainment",
        keyBenefits: "Encourages work-life balance through fitness and social outlets",
        differentiators: "Rare central location offering both tennis and squash facilities"
    },
    {
        title: "Business Centre",
        description: "24/7 facility providing internet and administrative support. ",
        image: "/business-img.jpeg",
        linkText: "Visit Centre",
        linkHref: "/contact",
        targetAudience: "Remote workers and international consultants",
        keyBenefits: "Ensures high productivity with reliable office infrastructure",
        differentiators: "Multilingual staff available to assist diplomatic delegations"
    }
];

export default function ProductsAndServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/nicon.png"
                        alt=" Products and Services at Abuja International Hotels"
                        className="w-full h-full object-cover text-white"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#DC833D] mb-4">Discover Perfection</p>
                    <h1 className="text-4xl md:text-6xl font-quicksand text-white uppercase tracking-tight">
                        Products and Services
                    </h1>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' }
                ]}
                currentPage=" Products and Services"
            />

            {/* Introduction */}
            <section className="max-w-4xl mx-auto px-6 md:px-12 pt-24 pb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] mb-8 uppercase tracking-tight">
                    The Pinnacle of Luxury
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                    Explore the distinct pillars of the Abuja International Hotels experience. Every corner of our property is thoughtfully crafted to deliver an unforgettable fusion of sophistication, comfort, and world-class service.
                </p>
            </section>

            {/* Portfolio Grid Layout */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className={`flex flex-col gap-12 lg:gap-20 items-stretch ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                            {/* Image Container */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className="absolute inset-0 bg-[#DC833D]/20 transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                                <div className="aspect-4/5 md:aspect-3/4 w-full relative overflow-hidden bg-gray-100 shadow-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 lg:px-8">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-[1px] w-12 bg-[#DC833D]"></div>
                                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#DC833D]">Service 0{index + 1}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-quicksand text-[#1a2b4b] mb-6">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 font-light text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Detailed Facts Grid */}
                                <div className="grid grid-cols-1 gap-6 pt-4 border-t border-gray-100">
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-[#fdf5f0] flex items-center justify-center text-[#DC833D]">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a2b4b] mb-1">Target Audience</h4>
                                            <p className="text-sm text-gray-500 italic">{(item as any).targetAudience}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-[#fdf5f0] flex items-center justify-center text-[#DC833D]">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a2b4b] mb-1">Key Benefits</h4>
                                            <p className="text-sm text-gray-500">{(item as any).keyBenefits}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-[#fdf5f0] flex items-center justify-center text-[#DC833D]">
                                            <Trophy className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a2b4b] mb-1">Differentiators</h4>
                                            <p className="text-sm text-gray-500">{(item as any).differentiators}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link href={item.linkHref} className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-[#1a2b4b] uppercase border-b border-[#1a2b4b] pb-2 hover:text-[#DC833D] hover:border-[#DC833D] transition-colors group">
                                        {item.linkText}
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Spacing before footer */}
            <div className="h-24"></div>

            <InvestorMaterial />
        </main>
    );
}
