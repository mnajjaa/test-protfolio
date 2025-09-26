import Title from "./Title";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Importez vos images comme dans Experiences.tsx
import imgPYTHON from "../assets/techno/python.png";
import imgR from "../assets/techno/R.png";
import imgSQL from "../assets/techno/sql.png";
import imgPOWERBI from "../assets/techno/powerBi.png";
import imgTENSORFLOW from "../assets/techno/tensorflow.png";
import imgHADOOP from "../assets/techno/hadd.png";
import imgDOCKER from "../assets/techno/dockerr.png";
import imgGCP from "../assets/techno/gcp.png";
import imgJAVA from "../assets/techno/java.png";
import imgPHP from "../assets/techno/php.png";
import imgJS from "../assets/techno/javascript.png";
import imgMONGODB from "../assets/techno/mongodb.png";
import imgPOSTGRESQL from "../assets/techno/postgresql.png";
import imgFLASK from "../assets/techno/flask.png";
import imgFASTAPI from "../assets/techno/fastapi.png";
import imgSPRING from "../assets/techno/Spring.png";
import imgSYMFONY from "../assets/techno/symfony.png";
import imgFLUTTER from "../assets/techno/flutter.png";
import imgMLFLOW from "../assets/techno/mlflow.png";
import imgJENKINS from "../assets/techno/jenkins.png";

const Competences = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const competences = [
        {
            category: "Langages de Programmation",
            skills: [
                { name: "Python", image: imgPYTHON, level: "Avancé" },
                { name: "R", image: imgR, level: "Intermédiaire" },
                { name: "Java", image: imgJAVA, level: "Intermédiaire" },
                { name: "PHP", image: imgPHP, level: "Intermédiaire" },
                { name: "SQL", image: imgSQL, level: "Avancé" }
            ]
        },
        {
            category: "Machine Learning & IA",
            skills: [
                { name: "Régression/Classification", image: imgPYTHON, level: "Avancé" },
                { name: "Clustering", image: imgPYTHON, level: "Avancé" },
                { name: "Deep Learning", image: imgTENSORFLOW, level: "Intermédiaire" },
                { name: "LLM", image: imgPYTHON, level: "Intermédiaire" },
                { name: "NLP", image: imgPYTHON, level: "Intermédiaire" },
                
            ]
        },
        {
            category: "Développement Web & API",
            skills: [
                { name: "Flask", image: imgFLASK, level: "Avancé" },
                { name: "FastAPI", image: imgFASTAPI, level: "Intermédiaire" },
                { name: "Spring Boot", image: imgSPRING, level: "Intermédiaire" },
                { name: "Symfony", image: imgSYMFONY, level: "Intermédiaire" },
                { name: "React", image: imgJS, level: "Intermédiaire" },
                { name: "Flutter", image: imgFLUTTER, level: "Intermédiaire" }
            ]
        },
        {
            category: "Base de Données",
            skills: [
                { name: "MySQL", image: imgSQL, level: "Avancé" },
                { name: "PostgreSQL", image: imgPOSTGRESQL, level: "Avancé" },
                { name: "MongoDB", image: imgMONGODB, level: "Intermédiaire" },
                { name: "Hadoop", image: imgHADOOP, level: "Intermédiaire" }
            ]
        },
        {
            category: "MLOps & CI/CD",
            skills: [
                { name: "Docker", image: imgDOCKER, level: "Intermédiaire" },
                { name: "MLflow", image: imgMLFLOW, level: "Intermédiaire" },
                { name: "Jenkins", image: imgJENKINS, level: "Intermédiaire" },
                { name: "Makefile", image: imgPYTHON, level: "Intermédiaire" }
            ]
        },
        {
            category: "DataViz & BI",
            skills: [
                { name: "Power BI", image: imgPOWERBI, level: "Avancé" },
                { name: "Google Looker Studio", image: imgGCP, level: "Intermédiaire" }
            ]
        }
    ];

    return (
    <div id="Competences" className="bg-base-100 p-10 mb-10 md:mb-32"> {/* Changé de bg-base-300 à bg-base-100 */}
        <div className="max-w-6xl mx-auto">
            <Title title="Mes Compétences" />
            <br /><br />

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {competences.map((competence, index) => (
                    <motion.div
                        key={index}
                        className="bg-base-300 p-6 rounded-2xl shadow-lg border border-base-200"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-accent text-accent">
                            {competence.category}
                        </h2>
                        <div className="space-y-4">
                            {competence.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-center gap-4">
                                    <div className="w-12 h-12 p-1 rounded-full bg-accent/20 flex items-center justify-center"> 
                                        <img 
                                            src={skill.image} 
                                            alt={skill.name}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-base-content">{skill.name}</h3>
                                        <div className="w-full bg-base-100 rounded-full h-2 mt-1"> {/* Changé de bg-base-200 à bg-base-100 */}
                                            <div 
                                                className="h-2 rounded-full bg-accent" 
                                                style={{ 
                                                    width: skill.level === "Avancé" ? "90%" : 
                                                           skill.level === "Intermédiaire" ? "65%" : "40%"
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <span className="text-sm text-base-content/70">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
);
};

export default Competences;