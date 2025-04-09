import { useState, useEffect } from "react";

export default function Navbar() {
    const [showNav, setShowNav] = useState(true);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowNav(scrollY < lastScrollY);
            lastScrollY = scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-[2px] rounded-full shadow-lg transition-transform duration-300 z-50 border-[0.5px] border-transparent animate-border
            ${showNav ? "translate-y-0" : "-translate-y-20"}`}
        >
            <div className="relative flex space-x-4 px-4 py-2">
                <span className="absolute inset-0 "></span>
                <a href="#about" className="text-sm hover:text-gray-400 relative z-10">
                    About
                </a>
                <a href="#projects" className="text-sm hover:text-gray-400 relative z-10">
                    Projects
                </a>
                <a href="#contact" className="text-sm hover:text-gray-400 relative z-10">
                    Contact
                </a>
            </div>
            <style jsx>
                {`
    @keyframes border-animation {
        0% {
            border-color: #3b82f6; /* Blue */
        }
        25% {
            border-color: #6366f1; /* Indigo */
        }
        50% {
            border-color: #a855f7; /* Purple */
        }
        75% {
            border-color: #ec4899; /* Pink */
        }
        100% {
            border-color: #3b82f6; /* Back to Blue */
        }
    }
    .animate-border {
        animation: border-animation 30s infinite linear;
    }
`}
            </style>
        </nav>
    );
}
