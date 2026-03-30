'use client';

import { Target, Eye, Lightbulb, Clock, Award, Shield } from 'lucide-react';
import Image from 'next/image';
import CommitmentSection from '../../components/CommitmentSection';
import TimelineSection from '../../components/TimelineSection';
import InvestorMaterial from '../../components/InvestorMaterial';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import MissionVision from '@/app/components/ui/MissionVision';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">



            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/reception-img.jpg"
                        alt="Corporate Governance Hero"
                        className="w-full h-full object-cover text-white"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' },
                    { title: 'Our History', href: '/about/history' }
                ]}
                currentPage="Our History"
            />

            {/* Company Overview */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12 text-center items-center">
                        <div className="space-y-6">

                            <h3 className="text-3xl md:text-4xl font-quicksand text-black dark:text-white">
                                Our History
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Abuja International Hotels Plc offers unparalleled luxury and comfort in the heart of
                                Abuja. A premier destination for business and leisure. set against the spectacular
                                backdrop of Aso Rock, right at the center of the Federal Capital
                                Territory. The hotel came into existence as a result of Nigeria hosting
                                of the Commonwealth Head of Government Meeting (CHOGM) in 2003
                                as it received the privilege to accommodate members of the
                                Commonwealth Business Forum
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <TimelineSection />

            {/* Strategy Section (Vision, Mission, Philosophy) */}
            <MissionVision />
            <InvestorMaterial />

        </div>
    );
}
