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
import imgPHP from "../assets/techno/php.png";
import imgJS from "../assets/techno/javascript.png";
import imgMONGODB from "../assets/techno/mongodb.png";
import imgPOSTGRESQL from "../assets/techno/postgresql.png";
import imgFLASK from "../assets/techno/flask.png";
import imgFASTAPI from "../assets/techno/fastapi.png";
import imgSPRING from "../assets/techno/Spring.png";
import imgSYMFONY from "../assets/techno/symfony.png";
import imgMLFLOW from "../assets/techno/mlflow.png";
import imgJENKINS from "../assets/techno/jenkins.png";

type Skill = {
    name: string;
    image: string;
    level: "Avance" | "Intermediaire" | "Debutant";
    focus: string;
};

type CompetenceArea = {
    category: string;
    summary: string;
    skills: Skill[];
};

const competenceAreas: CompetenceArea[] = [
    {
        category: "Langages de programmation",
        summary:
            "Stack principal pour prototyper rapidement, industrialiser des pipelines data et livrer des outils front-end fiables.",
        skills: [
            { name: "Python", image: imgPYTHON, level: "Avance", focus: "Scripting, pipelines ML et automatisation." },
            { name: "R", image: imgR, level: "Intermediaire", focus: "Analyses statistiques et modelisation exploratoire." },
            { name: "Java", image: imgJAVA, level: "Intermediaire", focus: "Services backend et outils enterprise." },
            { name: "PHP", image: imgPHP, level: "Intermediaire", focus: "Integrations legacy et CMS a forte contrainte." },
            { name: "SQL", image: imgSQL, level: "Avance", focus: "Modelisation relationnelle et optimisation de requetes." },
        ],
    },
    {
        category: "Machine Learning & IA",
        summary:
            "Methodes pour concevoir des modeles explicables, orchestrer les experiments et translater les insights en impact business.",
        skills: [
            { name: "Regression / Classification", image: imgPYTHON, level: "Avance", focus: "KPIs predictifs et scoring operationnel." },
            { name: "Clustering", image: imgPYTHON, level: "Avance", focus: "Segmentation client et pattern discovery." },
            { name: "Deep Learning", image: imgTENSORFLOW, level: "Intermediaire", focus: "Modeles vision et sequences TensorFlow." },
            { name: "LLM", image: imgPYTHON, level: "Intermediaire", focus: "Prompt engineering et workflows de fine-tuning." },
            { name: "NLP", image: imgPYTHON, level: "Intermediaire", focus: "Analyse textuelle, extraction d'entites et resumes." },
        ],
    },
    {
        category: "Developpement Web & API",
        summary:
            "Frameworks utilises pour proposer des experiences full-stack performantes, exposees via des APIs robustes.",
        skills: [
            { name: "Flask", image: imgFLASK, level: "Avance", focus: "APIs data et micro-services rapides a deployer." },
            { name: "FastAPI", image: imgFASTAPI, level: "Intermediaire", focus: "Endpoints asynchrones haute performance." },
            { name: "Spring Boot", image: imgSPRING, level: "Intermediaire", focus: "Microservices structures et securisation." },
            { name: "Symfony", image: imgSYMFONY, level: "Intermediaire", focus: "Architecture solide pour backends modulaires." },
            { name: "React", image: imgJS, level: "Intermediaire", focus: "Dashboards interactifs et interfaces admin." },
        ],
    },
    {
        category: "Base de donnees",
        summary:
            "Technologies pour structurer, requeter et optimiser la persistence des donnees au service des projets.",
        skills: [
            { name: "MySQL", image: imgSQL, level: "Avance", focus: "Schemas transactionnels et tuning de requetes." },
            { name: "PostgreSQL", image: imgPOSTGRESQL, level: "Avance", focus: "Charges analytiques et fonctions avancees." },
            { name: "MongoDB", image: imgMONGODB, level: "Intermediaire", focus: "Stores documentaires flexibles pour APIs." },
            { name: "Hadoop", image: imgHADOOP, level: "Intermediaire", focus: "Pipelines distribues pour gros volumes." },
        ],
    },
    {
        category: "MLOps & CI/CD",
        summary:
            "Solutions adoptees pour packager, deployer et superviser les pipelines ML sur des environnements hybrides.",
        skills: [
            { name: "Docker", image: imgDOCKER, level: "Intermediaire", focus: "Containerisation et reproductibilite des runs." },
            { name: "MLflow", image: imgMLFLOW, level: "Intermediaire", focus: "Traquage d'experiments et model registry." },
            { name: "Jenkins", image: imgJENKINS, level: "Intermediaire", focus: "Automatisation CI/CD pour projets data." },
            { name: "Makefile", image: imgPYTHON, level: "Intermediaire", focus: "Orchestration simple de builds et scripts." },
        ],
    },
    {
        category: "DataViz & BI",
        summary:
            "Plateformes utilisees pour transformer des indicateurs complexes en tableaux de bord actionnables.",
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
        <section id="Competences" className="bg-base-100 py-16 py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Title title="Mes Compétences" />
                <div className="mt-12 rounded-3xl border border-base-300/50 bg-base-300 p-8 shadow-xl backdrop-blur md:px-12">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col gap-3 pb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                            <h2 className="text-3xl font-semibold tracking-tight">Panorama technique</h2>
                            <p className="max-w-xl text-sm leading-relaxed text-base-content/70">
                                Equilibre entre expertise data, industrialisation des workflows et sensibilite produit pour livrer des solutions qui durent.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                            initial="hidden"
                            animate={isMounted ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            {competenceAreas.map((competence, index) => (
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

                                    <p className="mt-4 text-sm leading-relaxed text-base-content/75">
                                        {competence.summary}
                                    </p>

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
