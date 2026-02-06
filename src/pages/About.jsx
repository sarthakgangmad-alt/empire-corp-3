import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Ruler, HardHat, FileText, LayoutTemplate, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';

export default function About() {
    const processSteps = [
        {
            id: 1,
            title: 'Consultation & Feasibility',
            desc: 'We begin by reviewing your vision, zoning requirements, and budget. We provide honest assessments of what is possible on your property before you spend a dollar on design.'
        },
        {
            id: 2,
            title: 'Design & Engineering',
            desc: 'Our architectural team develops detailed plans while structural engineers ensure integrity. We handle all municipal zoning reviews and satisfy strict building code requirements.'
        },
        {
            id: 3,
            title: 'Permitting & Planning',
            desc: 'We navigate the complex approvals process, securing necessary permits from the city. Simultaneously, we finalize a transparent construction schedule and budget.'
        },
        {
            id: 4,
            title: 'Construction Management',
            desc: 'Your project is assigned a dedicated site supervisor. We coordinate trades, manage inspections, and execute the build with precision, keeping you updated weekly.'
        },
        {
            id: 5,
            title: 'Handover & Warranty',
            desc: 'We conduct a thorough walkthrough to ensure every detail meets our standards. Upon completion, we provide full warranty documentation and project close-out files.'
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-stone-900/50 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                    alt="Structural Construction"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center max-w-4xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Built on Accountability.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-stone-200 font-light tracking-wide"
                    >
                        Leading the standard for design-build construction.
                    </motion.p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h4>
                        <h2 className="text-4xl font-bold text-stone-900 mb-6">Empire Construction Corp</h2>
                        <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                            <p>
                                Empire Construction Corp is a fully integrated design-build firm dedicated to complex residential and commercial projects. We move beyond the traditional fragmented construction model by taking full ownership of your project from the first sketch to the final inspection.
                            </p>
                            <p>
                                We are not a volume builder. We are technical specialists who thrive on structural challenges, permit-driven additions, and full-scale renovations that require precision engineering.
                            </p>
                        </div>
                    </div>
                    <div className="bg-stone-100 p-8 rounded-2xl border-l-4 border-orange-500">
                        <h3 className="text-2xl font-bold text-stone-900 mb-6">Built For Serious Projects</h3>
                        <p className="text-stone-600 mb-6">
                            Our services are specifically designed for property owners who need:
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Complete structural reconfiguration (Load-bearing wall removal)',
                                'Home additions and second-story expansions',
                                'Commercial interior fit-outs with strict code compliance',
                                'Permit-heavy projects requiring architectural stamps'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle2 className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                    <span className="text-stone-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Design-Build Philosophy */}
            <div className="bg-stone-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Design-Build Advantage</h2>
                        <p className="text-stone-400 text-lg leading-relaxed">
                            Traditional construction often pits architects against contractors, leading to delays and budget overruns.
                            At Empire, we unify the process. One team handles the design, the permits, and the build—ensuring
                            single-point accountability and seamless execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-stone-800 p-8 rounded-xl border border-stone-700">
                            <Users className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-4">Unified Team</h3>
                            <p className="text-stone-400">Architects, engineers, and trades working together under one roof from day one.</p>
                        </div>
                        <div className="bg-stone-800 p-8 rounded-xl border border-stone-700">
                            <Clock className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-4">Faster Delivery</h3>
                            <p className="text-stone-400">Overlapping design and pre-construction phases significantly reduce overall project timelines.</p>
                        </div>
                        <div className="bg-stone-800 p-8 rounded-xl border border-stone-700">
                            <ShieldCheck className="text-orange-500 mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-4">Cost Certainty</h3>
                            <p className="text-stone-400">Design decisions are priced immediately, preventing "sticker shock" after plans are finalized.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5-Step Process */}
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-16 text-center">Our Process</h2>
                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-stone-200" />

                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-5/12" />
                                <div className="z-10 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white my-4 md:my-0">
                                    {step.id}
                                </div>
                                <div className="w-full md:w-5/12 bg-stone-50 p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                                    <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-stone-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Why Property Owners Choose Us</h2>
                        <p className="text-stone-500 max-w-2xl mx-auto">We bring a professional management approach to an industry often plagued by uncertainty.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Licensed & Insured', desc: 'Fully licensed builder with comprehensive liability coverage.', icon: ShieldCheck },
                            { title: 'Permit Experts', desc: 'We handle all municipal red tape and zoning applications.', icon: FileText },
                            { title: 'Transparent Billing', desc: 'Detailed invoices and change orders. No hidden costs.', icon: LayoutTemplate },
                            { title: 'Safety First', desc: 'References available. Strict WSIB compliance and site safety.', icon: HardHat }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm">
                                <item.icon className="text-stone-800 mb-4" size={32} />
                                <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-stone-900 py-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-stone-900/90" />
                <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build with Confidence?</h2>
                    <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
                        If you are planning a significant construction project and value structural expertise and professional management, we want to hear from you.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/contact">
                            <LiquidMetalButton
                                size="lg"
                                icon={<ArrowRight className="w-5 h-5" />}
                                metalConfig={{ colorBack: '#ea580c', colorTint: '#fb923c' }}
                                className="font-bold text-lg"
                            >
                                Schedule Your Consultation
                            </LiquidMetalButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
