import Title from "./Title"
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.avif';
import img4 from '../assets/projects/5.png';
import img5 from '../assets/projects/img5.png';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'MarketMind - Analyse et Génération de Contenu Marketing par l\'IA',
        description: 'Solution IA permettant aux entreprises d\'exploiter une plateforme multi-LLM pour analyser les tendances sur les réseaux sociaux et générer du contenu marketing personnalisé (texte, image, audio, vidéo).',
        technologies: ['Python', 'LLM', 'NLP', 'Deep Learning', 'Flask'],
        demoLink: '#',
        repoLink: 'https://github.com/Nourhen-Ferjeni/MarketMind',
        image: img1,
    },
    {
    id: 2,
    title: 'Churn Prediction & MLOps Pipeline – Télécommunications',
    description: 'Projet de data science visant à prédire le churn des clients dans le secteur des télécommunications. Intègre un pipeline MLOps pour l’automatisation du processus de préparation des données, d’entraînement, de déploiement et de surveillance du modèle.',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'MLflow', 'Docker', 'FastAPI'],
    demoLink: '#',
    repoLink: 'https://github.com/Nourhen-Ferjeni/MLOPS_Customer_Churn_Prediction',
    image: img2,
},

    {
        id: 3,
        title: 'Analyse des vols Avian - Power BI',
        description: 'Dashboard analytique pour l\'optimisation des routes aériennes, analyse des retards et performance opérationnelle.',
        technologies: ['Power BI', 'SQL', 'Data Modeling', 'DAX'],
        demoLink: '#',
        repoLink: 'https://github.com/Nourhen-Ferjeni/Airline-Loyalty-Program',
        image: img3,
    },
    {
        id: 4,
        title: 'ARTvue - Plateforme Multiplateforme pour l\'Exposition d\'Art',
        description: 'Plateforme interactive accessible sur web, mobile et desktop permettant aux artistes d\'exposer, gérer et promouvoir leurs œuvres en ligne.',
        technologies: ['Symfony', 'JavaFX', 'Flutter', 'MySQL'],
        demoLink: '#',
        repoLink: 'https://github.com/Nourhen-Ferjeni/Art_Vue_Symfony',
        image: img4,
    },
    {
        id: 5,
        title: 'Application mobile pour école primaire',
        description: 'Application mobile pour une école primaire avec accès aux notes, emploi du temps, examens et intégration d\'un système de suivi des bus scolaires.',
        technologies: ['Flutter', 'Spring Boot', 'Firebase'],
        demoLink: '#',
        repoLink: 'https://github.com/Nourhen-Ferjeni/eParentFront',
        image: img5,
    }
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col h-full">
                        <div className="flex-shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full rounded-xl h-56 object-cover"
                            />
                        </div>
                        <div className="flex-grow flex flex-col">
                            <div className="flex-grow">
                                <h1 className="my-2 font-bold">
                                    {project.title}
                                </h1>
                                <p className="text-sm">{project.description}</p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="badge badge-accent badge-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex mt-auto">
                                <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                    Demo
                                    <Video className="w-4" />
                                </a>
                                <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                    <Github className="w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects