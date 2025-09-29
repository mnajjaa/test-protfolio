import Title from "./Title";
import flexflow from "../assets/projects/flexflow.png";
import B2B from "../assets/projects/B2B.png";
import overview from "../assets/projects/overview.png";
import bank from "../assets/projects/bankscope.png";
import churn from "../assets/projects/churn.png";
import { Github, Video } from "lucide-react";

const projects = [
    
    {
        id: 1,
        title: "BankScope - Banking Agent Simulation Platform",
        description:
            "Un simulateur IA multi-agents pour modéliser le comportement des entreprises clientes des banques tunisiennes, intégrant agents dynamiques, scraping intelligent avec LLM et LangChain, ainsi que des méthodes avancées pour prédire adoption, churn et impact des scénarios économiques/marketing.",
        technologies: ["FastAPI", "Pandas", "NumPy", "Mesa", "React", "LangChain"],
        demoLink: "#",
        repoLink: "https://github.com/mnajjaa/banking-agent-simulation-platform",
        image: bank,
    },
     {
        id: 2,
        title: "DueDeals - Crypto Funds Due Diligence & Market Analysis",
        description:
            "Plateforme permet l’évaluation de projets blockchain grâce à des pipelines de données distribués, un système Q&A et un chatbot intelligent basés sur le Prompt Engineering et le RAG. La solution inclut un moteur de scoring, des dashboards interactifs et la génération automatisée de rapports détaillés.",
        technologies: ["Pandas", "GenAI", "Prompt Engineering", "RAG", "Django", "Celery"],
        demoLink: "#",
        repoLink: "https://github.com/mnajjaa/Crypto-Fund-Due-Diligence-Automation",
        image: overview,
    },
    {
        id: 3,
        title: "Churn Prediction & MLOps Pipeline – Télécommunications",
        description:
            "Projet de data science pour prédire le churn client dans les télécommunications. Il intègre un pipeline MLOps de bout en bout (préparation des données, entraînement, déploiement, suivi du modèle) et un tableau de bord Power BI présentant les KPI.",
        technologies: ["Python", "scikit-learn", "Pandas", "Docker", "MLflow","Jenkins", "FastAPI", "Power BI","PostgreSQL", "Elasticsearch", "Kibana"],
        demoLink: "#",
        repoLink: "https://github.com/mnajjaa/telecom-churn-prediction-mlops-pipeline",
        image: churn,
    },
    // {
    //     id: 4,
    //     title: "Analyse des vols Avian - Power BI",
    //     description:
    //         "Dashboard analytique pour l'optimisation des routes aeriennes, analyse des retards et performance operationnelle.",
    //     technologies: ["Power BI", "SQL", "Data Modeling", "DAX"],
    //     demoLink: "#",
    //     repoLink: "https://app.powerbi.com/groups/db99f688-aca7-4a0e-b15f-c1aeea23e873/reports/170c55ba-7e00-4092-9f94-202b9705caec?ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pbi_source=linkShare",
    //     image: BI,
    // },
    {
        id: 5,
        title: "FlexFlow – Plateforme multisupport de sport et bien-être",
        description:
            "FlexFlow est une plateforme sportive tout-en-un qui centralise coaching, événements et e-commerce avec automatisation intelligente.",
        technologies: ["Symfony", "JavaFX", "Flutter", "MySQL"],
        demoLink: "#",
        repoLink: "https://github.com/mnajjaa/FlexFlowWeb",
        image: flexflow,
    },
    {
        id: 6,
        title: "Plateforme B2B de gestion des interventions d’assurance ",
        description:
            "Application web B2B permettant aux compagnies d’assurance de gérer efficacement leurs interventions",
        technologies: ["Laravel", "Vue.js", "Figma"],
        demoLink: "#",
        repoLink: "https://github.com/mnajjaa/B2B_project_Backend",
        image: B2B,
    },
];

const Projects = () => {
    return (
        <div id="Projects" className="bg-base-300 p-10  ">
            <div className="max-w-6xl mx-auto">
                <Title title="Mes Projets" />
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

