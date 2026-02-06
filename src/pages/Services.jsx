import { motion } from 'framer-motion';
import { Home, Hammer, Ruler, Building2, PaintBucket, ArrowRight, CheckCircle2 } from 'lucide-react';
import ImageSequencePlayer from '../components/ImageSequencePlayer';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';



const services = [
    {
        id: 'residential',
        title: 'Residential Construction',
        icon: Home,
        description: 'Custom home builds tailored to your vision, handled from foundation to final inspection.',
        details: [
            'Custom home builds from architectural plans',
            'Foundation work and structural framing',
            'Electrical, plumbing, and HVAC installation',
            'Interior finishing & Exterior completion',
            'Final inspections and code compliance'
        ],
        target: 'Property owners building new single-family homes or custom residences.'
    },
    {
        id: 'renovations',
        title: 'Residential Renovations',
        icon: PaintBucket,
        description: 'Transform your living space with modern updates, improved functionality, and structural repairs.',
        details: [
            'Kitchen and bathroom remodels',
            'Interior layout modifications',
            'Flooring replacement and upgrades',
            'Energy efficiency improvements',
            'Structural repairs and reinforcements'
        ],
        target: 'Homeowners updating existing properties for comfort or value.'
    },
    {
        id: 'additions',
        title: 'Home Additions',
        icon: Hammer,
        description: 'Expand your square footage with seamless room additions, second stories, or garage conversions.',
        details: [
            'Room additions (bedrooms, bathrooms)',
            'Second-story additions',
            'Garage construction and conversion',
            'Basement finishing',
            'Structural integration with existing foundation'
        ],
        target: 'Families requiring additional space without relocating.'
    },
    {
        id: 'commercial',
        title: 'Commercial Construction',
        icon: Building2,
        description: 'Professional build-outs and renovations for offices, retail, and industrial spaces.',
        details: [
            'Tenant improvement and fit-out work',
            'Office space construction',
            'Retail and restaurant build-outs',
            'Accessibility compliance upgrades',
            'Commercial-grade systems installation'
        ],
        target: 'Business owners and property managers needing professional commercial space.'
    },
    {
        id: 'design',
        title: 'Design & Engineering',
        icon: Ruler,
        description: 'Comprehensive planning, architectural design, and structural engineering services.',
        details: [
            'Architectural design and space planning',
            'Structural engineering layouts',
            'Building permit application',
            'Cost estimation and budget planning',
            '3D renderings and construction drawings'
        ],
        target: 'Clients needing professional design before construction begins.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Services() {
    return (
        <div className="min-h-screen bg-stone-50 pt-20 pb-24">

            {/* Header / Hero Section */}
            <div className="relative h-screen bg-stone-900 text-white overflow-hidden flex items-center">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <ImageSequencePlayer
                        sequencePath="/sequence-2"
                        frameCount={151}
                        fps={12}
                    />
                    <div className="absolute inset-0 bg-stone-900/60" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Our <span className="text-orange-500">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-stone-200 max-w-2xl leading-relaxed"
                    >
                        Comprehensive construction solutions managed with structural integrity, regulatory compliance, and precision.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className={`group flex flex-col md:flex-row gap-8 ${index === services.length - 1 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto' : ''}`}
                        >
                            {/* 3D Card Effect Container */}
                            <motion.div
                                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                                className="w-full md:w-1/3 bg-white p-8 rounded-xl shadow-lg border border-stone-100 group-hover:border-orange-200 transition-all duration-300 relative overflow-hidden shrink-0 flex flex-col justify-center items-center text-center perspective-1000"
                            >
                                <div className="absolute inset-0 bg-stone-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 w-20 h-20 bg-stone-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300 shadow-xl">
                                    <service.icon size={36} className="text-white" />
                                </div>
                                <h3 className="relative z-10 text-xl font-bold text-stone-900 group-hover:text-orange-900 transition-colors">
                                    {service.title}
                                </h3>
                            </motion.div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/3 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center">
                                    Overview
                                </h3>
                                <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-stone-900 mb-4 uppercase text-sm tracking-wider flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                        What We Deliver
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="flex items-start text-stone-600 text-sm">
                                                <CheckCircle2 size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
                                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                                        Ideal For: {service.target}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-stone-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.2),transparent_50%)]" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                        <p className="text-stone-400 text-lg mb-8">
                            Whether it's a new build or a complex renovation, our team is ready to deliver quality results on time and within budget.
                        </p>
                        <div className="flex justify-center">
                            <motion.a href="/contact">
                                <LiquidMetalButton
                                    size="lg"
                                    icon={<ArrowRight className="w-5 h-5" />}
                                    metalConfig={{ colorBack: '#ea580c', colorTint: '#fb923c' }}
                                    className="font-bold text-lg"
                                >
                                    Get Your Free Estimate
                                </LiquidMetalButton>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
