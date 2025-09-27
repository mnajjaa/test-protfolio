import Title from "./Title";
import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.avif";
import img4 from "../assets/projects/5.png";
import img5 from "../assets/projects/img5.png";
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "MarketMind - Analyse et Generation de Contenu Marketing par l'IA",
        description:
            "Solution IA permettant aux entreprises d'exploiter une plateforme multi-LLM pour analyser les tendances sur les reseaux sociaux et generer du contenu marketing personnalise (texte, image, audio, video).",
        technologies: ["Python", "LLM", "NLP", "Deep Learning", "Flask"],
        demoLink: "#",
        repoLink: "https://github.com/Nourhen-Ferjeni/MarketMind",
        image: img1,
    },
    {
        id: 2,
        title: "Churn Prediction & MLOps Pipeline - Telecommunications",
        description:
            "Projet de data science visant a predire le churn des clients dans le secteur des telecommunications. Integre un pipeline MLOps pour l'automatisation du processus de preparation des donnees, d'entrainement, de deploiement et de surveillance du modele.",
        technologies: ["Python", "scikit-learn", "Pandas", "MLflow", "Docker", "FastAPI"],
        demoLink: "#",
        repoLink: "https://github.com/Nourhen-Ferjeni/MLOPS_Customer_Churn_Prediction",
        image: img2,
    },
    {
        id: 3,
        title: "Analyse des vols Avian - Power BI",
        description:
            "Dashboard analytique pour l'optimisation des routes aeriennes, analyse des retards et performance operationnelle.",
        technologies: ["Power BI", "SQL", "Data Modeling", "DAX"],
        demoLink: "#",
        repoLink: "https://github.com/Nourhen-Ferjeni/Airline-Loyalty-Program",
        image: img3,
    },
    {
        id: 4,
        title: "ARTvue - Plateforme Multiplateforme pour l'Exposition d'Art",
        description:
            "Plateforme interactive accessible sur web, mobile et desktop permettant aux artistes d'exposer, gerer et promouvoir leurs oeuvres en ligne.",
        technologies: ["Symfony", "JavaFX", "Flutter", "MySQL"],
        demoLink: "#",
        repoLink: "https://github.com/Nourhen-Ferjeni/Art_Vue_Symfony",
        image: img4,
    },
    {
        id: 5,
        title: "Application mobile pour ecole primaire",
        description:
            "Application mobile pour une ecole primaire avec acces aux notes, emploi du temps, examens et integration d'un systeme de suivi des bus scolaires.",
        technologies: ["Flutter", "Spring Boot", "Firebase"],
        demoLink: "#",
        repoLink: "https://github.com/Nourhen-Ferjeni/eParentFront",
        image: img5,
    },
];

const Projects = () => {
    return (
        <div id="Projects" className="bg-base-300 p-10 mb-10 md:mb-32">
            <div className="max-w-6xl mx-auto">
                <Title title="Mes Projets" />
                <br />
                <br />
                <div className="grid gap-8 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-base-300/60 bg-base-100 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-48 bg-base-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover"
                                />
                                <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600 shadow-sm">
                                    {String(index + 1).padStart(2, "0")} - Project Spotlight
                                </span>
                            </div>

                            <div className="flex flex-1 flex-col gap-6 p-7">
                                <div>
                                    <h3 className="text-xl font-semibold leading-snug text-base-content">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-base-content/80">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-sky-200 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex flex-wrap gap-3">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm border-sky-600 bg-sky-600 text-white transition-colors hover:border-sky-700 hover:bg-sky-700"
                                    >
                                        Voir la demo
                                        <Video className="h-4 w-4" />
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm border-sky-500 bg-transparent text-sky-600 transition-colors hover:border-sky-600 hover:bg-sky-500/10"
                                    >
                                        Code source
                                        <Github className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

