import img from "../assets/photoLarge1.jpg";
import { Sparkles, Workflow, Orbit, Radar, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    const imageVariants = {
        hidden: { x: -40, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring" as const,
                stiffness: 110,
            },
        },
    };

    return (
        <section id="About" className="bg-base-300 py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">

                <motion.div
                    className=" flex flex-col items-center gap-10 md:flex-row"
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex h-full w-full items-center justify-center md:w-1/3"
                        variants={imageVariants}
                    >
                        <div className="relative flex h-[26rem] w-full items-center justify-center">
                            <img
                                src={img}
                                alt="Ibtihel Mnaja"
                                className="h-full w-full rounded-2xl border-4 border-sky-400/60 object-cover shadow-2xl shadow-sky-900/10"
                                style={{ objectPosition: "center center" }}
                            />
                            <div className="absolute -bottom-5 -right-5 flex items-center rounded-full border border-sky-200/70 bg-sky-500 px-4 py-2 text-white shadow-lg">
                                <Sparkles className="mr-2 h-4 w-4" />
                                <span>Data Scientist</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="w-full space-y-6 md:w-2/3" variants={containerVariants}>
                        <motion.div
                            className="rounded-3xl border border-base-200/70 bg-base-100 p-6 shadow-lg"
                            variants={itemVariants}
                        >
                            <h2 className="text-2xl font-semibold text-base-content">Mon parcours</h2>
                            <p className="mt-4 text-sm leading-relaxed text-base-content/80">
                                Etudiante ingenieure en Data Science a ESPRIT. Je combine modeles, pipelines et pratiques MLOps pour livrer des produits data utiles.
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-base-content/80">
                                Ce qui me motive ? decouvrir les bons signaux, anticiper les comportements et concevoir des experiences data a impact durable.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                    href="https://www.linkedin.com/in/ibtihel-mnaja-4a0540240/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm flex items-center gap-2 border-sky-300/70 text-sky-600 hover:border-sky-400 hover:bg-sky-500/10"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/mnajjaa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm flex items-center gap-2 border-sky-300/70 text-sky-600 hover:border-sky-400 hover:bg-sky-500/10"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="rounded-3xl border border-base-200/70 bg-base-100 p-5 shadow-md"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <h2 className="text-2xl font-semibold text-base-content">Mes atouts</h2>
                                <p className="max-w-md text-sm leading-relaxed text-base-content/70">
                                    Je privilegie un delivery fiable, collaboratif et mesurable.
                                </p>
                            </div>

                            <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                                <li className="group flex h-full flex-col rounded-2xl border border-base-200/70 bg-base-100/95 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200/60 bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500/15">
                                            <Workflow className="h-5 w-5" />
                                        </span>
                                        <h3 className="text-base font-semibold text-base-content">Collaboration</h3>
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-base-content/70">
                                        Workshops metier, syntheses claires, feedback rapide. Demos & docs regulières.
                                    </p>
                                </li>
                                <li className="group flex h-full flex-col rounded-2xl border border-base-200/70 bg-base-100/95 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200/60 bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500/15">
                                            <Radar className="h-5 w-5" />
                                        </span>
                                        <h3 className="text-base font-semibold text-base-content">Rigueur analytique</h3>
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-base-content/70">
Décisions tracées et reproductibles.                                    </p>
                                </li>
                                <li className="group flex h-full flex-col rounded-2xl border border-base-200/70 bg-base-100/95 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200/60 bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500/15">
                                            <Orbit className="h-5 w-5" />
                                        </span>
                                        <h3 className="text-base font-semibold text-base-content">Ownership</h3>
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-base-content/70">
                                        Autonomie, veille active (ML/MLOps), code propre et teste.
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-5 rounded-2xl border border-sky-200/60 bg-sky-500/10 p-4 text-sm font-medium text-base-content/80">
                                Ouverte a discuter de missions en IA generative ou de plateformes MLOps a mettre en production, dans des contextes reglementes ou scale-up.
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
