import Title from "./Title"


import entity from "../assets/companies/entity.png";
import ubci from "../assets/companies/ubci.png";
import innovup from "../assets/companies/innovup.png";

const experiences = [
    {
        id: 1,
        role: "Stagiaire Ingénieure",
        company: "Entity Service",
        period: "Juin 2025 - Août 2025",
        description: [
            "Participation au développement d'une application web en React pour la gestion des bornes de recharge de Renault.",
            "Création d'un dashboard de KPI clients avec visualisation de données"
        ],
        image: entity,
    },
    {
        id: 2,
        role: "Stagiaire Développeuse",
        company: "UBCI Banque",
        period: "Juin 2024 - Juillet 2024",
        description: [
            "Développement d'une application web Symfony/Angular pour la gestion RH",
            "Implémentation des fonctionnalités de gestion des congés et plannings"
        ],
        image: ubci,
    },
    {
        id: 3,
        role: "Stagiaire Développeuse",
        company: "Innovup",
        period: "Février 2023 - Mai 2023",
        description: [
            "Conception d'une application mobile Flutter/Spring Boot pour école primaire",
            "Intégration d'un système de suivi des bus scolaires en temps réel"
        ],
        image: innovup,
    },
];

const Experiences = () => {
    return (
        <div id="Experiences" className="bg-base-300 p-10 mb-10 md:mb-32">
            <div className="max-w-6xl mx-auto">
                <Title title="Expériences Professionnelles" />
                <br /><br />

                <div className="bg-base-100 p-6 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-base-300 flex items-center">
                        <span>Mes Expériences</span>
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((experience) => (
                            <div
                                key={experience.id}
                                className="group relative pl-8 pb-8 border-l-2 border-accent last:border-transparent last:pb-0"
                            >
                                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent border-4 border-base-100"></div>
                                <div className="bg-base-200 p-6 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={experience.image}
                                            alt={experience.company}
                                            className="object-cover h-14 w-14 rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold">
                                                {experience.role}
                                                <span className="text-accent"> @ {experience.company}</span>
                                            </h3>
                                            <span className="text-sm text-base-content/70">{experience.period}</span>
                                            <ul className="mt-4 space-y-3">
                                                {experience.description.map((desc, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-accent mr-2 mt-1">▹</span>
                                                        <span>{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences