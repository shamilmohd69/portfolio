'use client';
import React, { useEffect, useRef } from 'react'
import { Inter } from 'next/font/google';
import gsap from "gsap";

const inter = Inter({ subsets: ['latin'] });

const Hero = () => {
    const textRef = useRef(null);
    const helloRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            helloRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power4.out" }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, delay: 0.5, ease: "power4.out" }
        );

        gsap.fromTo(
            descRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, delay: 1, ease: "power4.out" }
        );
    }, []);

    return (
        <>
            <section className={`h-screen flex items-center justify-center flex-col ${inter.className}`}>
                <div className="text-left">
                    <h5 ref={helloRef} className='text-lg md:text-xl font-medium'>Hello, my name is </h5>
                    <h1 ref={textRef} className="text-3xl md:text-5xl font-semibold">
                        Shamil Mohamed,
                    </h1>
                    <h2 ref={descRef} className="font-mono">
                        a MERN-Stack Developer. Based on Kerala, India.
                    </h2>
                </div>
            </section>
        </>
    );
}

export default Hero;
