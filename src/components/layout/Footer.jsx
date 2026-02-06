export default function Footer() {
    return (
        <footer className="bg-stone-950 text-white py-16 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 tracking-tighter uppercase">Empire Corp</h3>
                        <p className="text-stone-400 leading-relaxed mb-6">
                            Building Quality. Delivering Results.
                            <br />
                            Commercial & Residential Construction.
                        </p>
                        <div className="text-stone-500 text-sm">
                            <p>Licensed & Insured</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-stone-300">Services</h4>
                        <ul className="space-y-3 text-stone-400">
                            <li><a href="/services" className="hover:text-orange-500 transition-colors">Residential Construction</a></li>
                            <li><a href="/services" className="hover:text-orange-500 transition-colors">Commercial Renovation</a></li>
                            <li><a href="/services" className="hover:text-orange-500 transition-colors">Home Additions</a></li>
                            <li><a href="/services" className="hover:text-orange-500 transition-colors">Design & Engineering</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-stone-300">Company</h4>
                        <ul className="space-y-3 text-stone-400">
                            <li><a href="/about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                            <li><a href="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
                            <li><a href="/contact" className="hover:text-orange-500 transition-colors">Careers</a></li>
                            <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-stone-300">Contact</h4>
                        <ul className="space-y-3 text-stone-400">
                            <li>44 Bellamy Road South</li>
                            <li>Scarborough, ON M1M3P2</li>
                            <li>(647)-646-3611</li>
                            <li>info@vanguardbuildlimited.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-800 text-center text-stone-600 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} Empire Construction Corp. All rights reserved.</p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-stone-300">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
