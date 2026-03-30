import { Eye, Lightbulb, Target } from 'lucide-react'


const MissionVision = () => {
    return (
        <section className="bg-[#FAFAFA] dark:bg-zinc-900 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-4">
                        Our Strategy
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif text-black dark:text-white">
                        Driven by Excellence
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Vision */}
                    <div className="bg-white dark:bg-black p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group text-center">
                        <div className="w-16 h-16 mx-auto bg-[#FAFAFA] dark:bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Eye className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-2xl font-serif text-black dark:text-white mb-6">Vision</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            To maintain its status as a premier destination in Nigeria's capital by consistently delivering exceptional service and luxury.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white dark:bg-black p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group text-center relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#DC833D]"></div>
                        <div className="w-16 h-16 mx-auto bg-[#FAFAFA] dark:bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Target className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-2xl font-serif text-black dark:text-white mb-6">Mission</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            To exceed guests' expectations, providing unrivaled luxurious lodging and catering services.
                        </p>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-white dark:bg-black p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group text-center">
                        <div className="w-16 h-16 mx-auto bg-[#FAFAFA] dark:bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Lightbulb className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-2xl font-serif text-black dark:text-white mb-6">Philosophy</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Operate with a strategy that blends it’s physical location advantage with a philosophy of relentless guest satisfaction, ensuring it remains a cornerstone of Abuja’s hospitality sector
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision