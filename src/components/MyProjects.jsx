"use client"
import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useOutsideClick } from "@/hooks/use-outside-click"

export default function MyProjects() {
    const [active, setActive] = useState(null)
    const ref = useRef(null)
    const id = useId()

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false)
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    const projects = [
        {
            title: "College Management System",
            type: "Demo Project",
            description: "College management web app for handling attendance, notes, fees, and more. It allows admins to manage staff, students, departments, courses, and subjects easily. Teachers can track student attendance, upload notes and assignments, and manage fee payments, while students can check their attendance, access materials, track fees, and chat with teachers and peers in real time.",
            ctaLink: "https://github.com/shamilmohd69/StJohnCena",
            ctaText: "GitHub",
        },
        {
            title: "E-Commerce Website",
            type: "Demo Project",
            description: "An e-commerce website that allows users to browse products, add them to their cart, and checkout. Users can create accounts, log in, and view their order history.",

        },
        {
            title: "Homezen Trading and Contracting",
            type: "Live Project",
            description: "Homezen is a fully developed website built with Next.js, Framer Motion, and Tailwind, designed to showcase services such as AC maintenance, installation, sales, and construction.",
            ctaLink: "https://homezentradings.com",
            ctaText: "Visit",
        }
    ]

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 flex items-center justify-center w-full h-full z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="absolute top-2 right-2 lg:hidden flex items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-4xl h-full md:h-auto md:max-h-[90%] flex flex-col bg-black border border-neutral-800 sm:rounded-3xl overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold text-white">
                                            {active.title}
                                        </motion.h3>
                                        <motion.p layoutId={`description-${active.description}-${id}`} className="text-neutral-400">
                                            {active.description}
                                        </motion.p>
                                    </div>
                                    {active.ctaLink ? <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                        rel="noreferrer"
                                    >
                                        {active.ctaText}
                                    </motion.a> : null}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="w-full max-w-5xl mx-auto gap-4 bg-black p-6 rounded-xl">
                {projects.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-3 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-900 rounded-xl cursor-pointer border border-neutral-800 mb-4 w-full"
                    >
                        <div className="flex gap-4 flex-col md:flex-row w-full">
                            <div>
                                <motion.h3 layoutId={`title-${card.title}-${id}`} className="font-medium text-white text-center md:text-left">
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    key={card.title} 
                                    className="text-neutral-400 text-center md:text-left"
                                >
                                    {card.type}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-neutral-800 hover:bg-green-500 hover:text-white text-neutral-300 mt-4 md:mt-0"
                        >
                            View
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    )
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    )
}
