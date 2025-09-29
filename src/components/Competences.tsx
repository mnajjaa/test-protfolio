import Title from "./Title";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import imgPYTHON from "../assets/techno/python.png";
import imgR from "../assets/techno/R.png";
import imgSQL from "../assets/techno/sql.png";
import imgPOWERBI from "../assets/techno/powerBi.png";
import imgTENSORFLOW from "../assets/techno/tensorflow.png";
import imgHADOOP from "../assets/techno/hadd.png";
import imgDOCKER from "../assets/techno/dockerr.png";
import imgJAVA from "../assets/techno/java.png";
import spark from "../assets/techno/spark.png";
import imgJS from "../assets/techno/javascript.png";
import imgMONGODB from "../assets/techno/mongodb.png";
import imgPOSTGRESQL from "../assets/techno/postgresql.png";
import imgFLASK from "../assets/techno/flask.png";
import imgFASTAPI from "../assets/techno/fastapi.png";
import neo from "../assets/techno/neo.png";
import imgSPRING from "../assets/techno/Spring.png";
import imgSYMFONY from "../assets/techno/symfony.png";
import imgMLFLOW from "../assets/techno/mlflow.png";
import imgJENKINS from "../assets/techno/jenkins.png";
import django from "../assets/techno/django.png";

type Skill = {
    name: string;
    image: string;
    level: "Avance" | "Intermediaire" | "Debutant";
    focus: string;
};

type CompetenceArea = {
    category: string;
    skills: Skill[];
};

const competenceAreas: CompetenceArea[] = [
    {
        category: "Langages de programmation",
        skills: [
            { name: "Python", image: imgPYTHON, level: "Avance", focus: "Scripting, pipelines ML et automatisation." },
            { name: "R", image: imgR, level: "Intermediaire", focus: "Analyses statistiques et modelisation exploratoire." },
            { name: "Java", image: imgJAVA, level: "Intermediaire", focus: "Services backend et outils enterprise." },
            { name: "SQL", image: imgSQL, level: "Avance", focus: "Modelisation relationnelle et optimisation de requetes." },
        ],
    },
    {
        category: "Machine Learning & IA",
        skills: [
            { name: "Classique", image: imgPYTHON, level: "Avance", focus: "Régression/Classification, clustering, réduction de dimension, déséquilibre" },
            { name: "Deep Learning", image: imgTENSORFLOW, level: "Intermediaire", focus: "PyTorch, TensorFlow/Keras" },
            { name: "NLP & LLM", image: imgPYTHON, level: "Intermediaire", focus: "Transformers (HF), RAG, LangChain (agents, prompting, retrieval)" },
            { name: "Data & scale", image: imgPYTHON, level: "Intermediaire", focus: "Pandas, NumPy ; PySpark (ETL, MLlib)" },
        ],
    },
    {
        category: "MLOps & CI/CD",
        skills: [
            { name: "Docker", image: imgDOCKER, level: "Intermediaire", focus: "Containerisation et reproductibilite des runs." },
            { name: "MLflow", image: imgMLFLOW, level: "Intermediaire", focus: "Traquage d'experiments et model registry." },
            { name: "Jenkins", image: imgJENKINS, level: "Intermediaire", focus: "Automatisation CI/CD pour projets data." },
            { name: "Makefile", image: imgPYTHON, level: "Intermediaire", focus: "Orchestration simple de builds et scripts." },
        ],
    },
    {
        category: "Développement Web & API",
        skills: [
            { name: "Flask", image: imgFLASK, level: "Avance", focus: "" },
            { name: "FastAPI", image: imgFASTAPI, level: "Intermediaire", focus: "" },
            { name: "Django", image: django, level: "Intermediaire", focus: "" },
            { name: "Spring Boot", image: imgSPRING, level: "Intermediaire", focus: "" },
            { name: "Symfony", image: imgSYMFONY, level: "Intermediaire", focus: "" },
            { name: "React, Angular", image: imgJS, level: "Intermediaire", focus: "" },

        ],
    },
    {
        category: "Big Data & Bases de données",
        skills: [
            { name: "Spark", image: spark, level: "Avance", focus: "" },
            { name: "Hadoop", image: imgHADOOP, level: "Avance", focus: "" },
            { name: "PostgreSQL", image: imgPOSTGRESQL, level: "Intermediaire", focus: "" },
            { name: "MySQL", image: imgSQL, level: "Intermediaire", focus: "" },
            { name: "MongoDB", image: imgMONGODB, level: "Intermediaire", focus: "" },
            { name: "Neo4j", image: neo, level: "Intermediaire", focus: "" },


        ],
    },
    
    {
        category: "DataViz & BI",
        skills: [
            { name: "Power BI", image: imgPOWERBI, level: "Avance", focus: "Reporting executif et suivi temps reel." },
        ],
    },
];

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
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.45,
            },
        },
    };

    return (
        <section id="Competences" className="bg-base-100 py-16 ">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Title title="Mes Compétences" />
                <div className="mt-12 rounded-3xl border border-base-300/50 bg-base-300 p-8 shadow-xl backdrop-blur md:px-12">
                    <div className="mx-auto max-w-5xl">
                        

                        <motion.div
                            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                            initial="hidden"
                            animate={isMounted ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            {competenceAreas.map((competence) => (
                                <motion.article
                                    key={competence.category}
                                    className="relative flex h-full flex-col rounded-2xl border border-base-100 bg-base-100 p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
                                >
                                    <header className="flex items-start justify-between gap-4">
                                        <div>
                                            
                                            <h3 className="mt-3 text-lg font-semibold text-base-content">
                                                {competence.category}
                                            </h3>
                                        </div>
                                    </header>

                                    

                                    <ul className="mt-6 space-y-2">
                                        {competence.skills.map((skill) => (
                                            <li key={skill.name} className="flex items-start gap-3">
                                                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-base-200 bg-base-100/80">
                                                    <img
                                                        src={skill.image}
                                                        alt={skill.name}
                                                        className="h-6 w-6 object-contain"
                                                    />
                                                </span>
                                                <div>
                                                    <p className="font-medium text-sm text-base-content">{skill.name}</p>
                                                    <p className="mt-1 text-xs leading-relaxed text-base-content/70">{skill.focus}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competences;
