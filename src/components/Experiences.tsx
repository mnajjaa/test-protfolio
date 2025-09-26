import { CheckCircle2 } from "lucide-react";
import Title from "./Title";


import darydar from "../assets/companies/darydar.png";
import medianet from "../assets/companies/medianet.png";
import value from "../assets/companies/value.png";
import { m } from "framer-motion";

const experiences = [
    {
        id: 1,
        role: "Stagiaire Data Science & IA chez",
        company: "Value",
        website: "https://value.tn",
        period: "Juin 2025 - Août 2025",
        description: [
            "Participation au dAcveloppement d'une application web en React pour la gestion des bornes de recharge de Renault.",
            "CrAcation d'un dashboard de KPI clients avec visualisation de donnAces"
        ],
        image: value,
    },
    {
        id: 2,
        role: "Stagiaire Data Science chez",
        company: "Value",
        website: "https://value.tn",
        period: "Janvier 2025 - Mai 2025",
        note: "Stage academique en collaboration avec ESPRIT",
        description: [
            "DAcveloppement d'une application web Symfony/Angular pour la gestion RH",
            "ImplAcmentation des fonctionnalitAcs de gestion des congAcs et plannings"
        ],
        image: value,
    },
    {
        id: 3,
        role: "Stagiaire en DAcveloppement Full-Stack chez",
        company: "Medianet",
        website: "https://www.medianet.tn/fr",
        period: "Juillet 2024 - Août 2024",
        description: [
            "Conception d'une application mobile Flutter/Spring Boot pour Accole primaire",
            "IntAcgration d'un systAme de suivi des bus scolaires en temps rAcel"
        ],
        image: medianet,
    },
    {
        id: 3,
        role: "Stagiaire en développement chez",
        company: "Darydar",
        website: "https://www.darydar.tn",
        period: "Février 2023 - Mai 2023",
        description: [
            "Conception d'une application mobile Flutter/Spring Boot pour Accole primaire",
            "IntAcgration d'un systAme de suivi des bus scolaires en temps rAcel"
        ],
        image: darydar,
    },
];

const Experiences = () => {
    return (
        <section id="Experiences" className="bg-base-100 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <Title title="Expériences Professionnelles" />
                <div className="mt-12 rounded-3xl border border-base-300/50 bg-base-300 p-8 shadow-xl backdrop-blur">
                    <div className="flex flex-col gap-3 pb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                        <h2 className="text-3xl font-semibold tracking-tight">Mes Expériences</h2>
                        <p className="max-w-xl text-sm leading-relaxed text-base-content/70">
                        Un parcours axé sur l’alliance des technologies, de la productivité et de l’esprit d’équipe.                        </p>
                    </div>
                    <div className="flex flex-col gap-12">
                        {experiences.map((experience, index) => {
                            const isLast = index === experiences.length - 1;

                            return (
                                <div key={experience.id} className="grid gap-8 md:grid-cols-[3.5rem_1fr] md:items-stretch">
                                    <div className="relative flex flex-col items-center pt-1">
                                        <span className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-600 ring-2 ring-sky-300/70">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        {!isLast && (
                                            <span className="mt-3 w-[3px] flex-1 rounded-full bg-gradient-to-b from-sky-200 via-sky-300 to-sky-500" />
                                        )}
                                    </div>
                                    <article className="relative flex h-full flex-col justify-between rounded-2xl border border-base-300/60 bg-base-100 p-7 shadow-md transition-shadow duration-200 hover:shadow-xl">
                                        <span className="absolute right-7 top-6 inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600 shadow-sm">
                                            1 mois
                                        </span>
                                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                            <div className="flex items-start gap-4">
                                                <img
                                                    src={experience.image}
                                                    alt={experience.company}
                                                    className="h-16 w-16 rounded-xl border border-base-200 bg-base-100 object-cover"
                                                />
                                                <div>
                                                    <h3 className="text-xl font-semibold">
                                                        {experience.role}
                                                        <span className="text-sky-500">
                                                            {" "}{" "}
                                                            {experience.website ? (
                                                                <a
                                                                    href={experience.website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="hover:underline"
                                                                >
                                                                    {experience.company}
                                                                </a>
                                                            ) : (
                                                                experience.company
                                                            )}
                                                        </span>
                                                    </h3>
                                                    <p className="mt-1 text-sm font-medium uppercase tracking-wide text-base-content/60">
                                                        {experience.period}
                                                    </p>
                                                    {experience.note && (
                                                        <p className="mt-2 text-xs italic text-base-content/70">
                                                            {experience.note}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="mt-6 space-y-3">
                                            {experience.description.map((desc, descriptionIndex) => (
                                                <li key={descriptionIndex} className="flex items-start gap-3 text-sm leading-relaxed text-base-content/80">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;

