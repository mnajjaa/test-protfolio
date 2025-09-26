import Title from "./Title";
import img from '../assets/img1.jpeg';
import { BrainCircuit, Cloud, FlaskConical, Sparkles, Github, Linkedin } from "lucide-react";
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
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const imageVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <div className="max-w-6xl mx-auto">
                <Title title="À propos de moi" />
                <br />
                <motion.div 
                    className="flex flex-col md:flex-row gap-8 items-center"
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Photo de profil */}
                    <motion.div 
                        className="w-full md:w-1/3 flex justify-center items-center h-full"
                        variants={imageVariants}
                    >
                        <div className="relative w-full h-[26rem] flex items-center justify-center">
                            <img 
                                src={img} 
                                alt="Nourhen Ferjani" 
                                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-accent"
                                style={{ objectPosition: "center center" }}
                            />
                            <div className="absolute -bottom-5 -right-5 bg-accent text-white px-4 py-2 rounded-full shadow-md flex items-center">
                                <Sparkles className="mr-2" />
                                <span>Data Scientist</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contenu texte */}
                    <motion.div 
                        className="w-full md:w-2/3 space-y-6"
                        variants={containerVariants}
                    >
                        {/* Bio */}
                        <motion.div 
                            className="bg-base-100 p-6 rounded-xl shadow-lg"
                            variants={itemVariants}
                        >
                            <h2 className="text-2xl font-bold mb-4">Mon Parcours</h2>
                            <p className="text-base-content/90 mb-4">
                                Étudiante en 3ème année d'ingénierie en Data Science à ESPRIT, je me spécialise dans l'analyse de données et l'intelligence artificielle. Passionnée par la transformation des données en insights actionnables, je m'épanouis dans les défis techniques qui allient rigueur analytique et créativité.
                            </p>
                            <p className="text-base-content/90 mb-6">
                                Ce qui me motive ? Découvrir des patterns cachés dans les données et développer des solutions intelligentes qui apportent une réelle valeur.
                            </p>
                            
                            {/* Liens réseaux sociaux */}
                            <div className="flex flex-wrap gap-3">
                                <a 
                                    href="https://www.linkedin.com/in/nourhen-ferjeni-32156a207/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-accent btn-outline btn-sm flex items-center gap-2"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                                <a 
                                    href="https://github.com/Nourhen-Ferjeni" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-accent btn-outline btn-sm flex items-center gap-2"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                                {/* Ajoutez d'autres liens si nécessaire */}
                            </div>
                        </motion.div>

                        {/* Points forts */}
                        <motion.div 
                            className="bg-base-100 p-6 rounded-xl shadow-lg"
                            variants={itemVariants}
                        >
                            <h2 className="text-2xl font-bold mb-4">Mes Forces</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-start gap-3">
                                    <BrainCircuit className="text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Esprit d'analyse</h3>
                                        <p className="text-sm text-base-content/80">Approche méthodique des problèmes complexes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Cloud className="text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Curiosité</h3>
                                        <p className="text-sm text-base-content/80">Veille technologique constante</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FlaskConical className="text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">Adaptabilité</h3>
                                        <p className="text-sm text-base-content/80">Apprentissage continu des nouvelles technologies</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Citation */}
                        <motion.div 
                            className="bg-accent/10 p-6 rounded-xl border border-accent/20 italic text-center"
                            variants={itemVariants}
                        >
                            <p className="text-base-content/90">
                                "Dans un monde rempli de données, ce ne sont pas les informations qui manquent, mais la sagesse pour les interpréter."
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;