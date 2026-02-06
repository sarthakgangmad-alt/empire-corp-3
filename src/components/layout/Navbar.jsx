import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link to="/" className="text-2xl font-bold tracking-tighter text-stone-950 uppercase">
                        Empire <span className="text-orange-600">Corp</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-stone-600 hover:text-orange-600 font-medium transition-colors text-sm tracking-wide uppercase"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link to="/contact" className="bg-stone-950 text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300">
                            Get a Quote
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900 p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-stone-200 absolute w-full top-20 left-0 shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="block text-lg text-stone-800 hover:text-orange-600 font-medium border-b border-stone-100 pb-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
