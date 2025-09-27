import Title from "./Title";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Contact = () => {
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

    return (
        <section id="Contact" className="bg-base-100 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Title title="Contactez-moi" />
                <div className="mt-12 rounded-3xl border border-base-300/50 bg-base-300 p-8 shadow-xl backdrop-blur md:px-12">
                    <div className="flex flex-col gap-3 pb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                        <h2 className="text-3xl font-semibold tracking-tight">Restons en contact</h2>
                        <p className="max-w-xl text-sm leading-relaxed text-base-content/70">
                            Un message suffit pour démarrer une collaboration : échangeons sur vos enjeux data, IA ou produits digitaux.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
                        initial="hidden"
                        animate={isMounted ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="flex h-full flex-col justify-between rounded-2xl border border-base-300/60 bg-base-100/90 p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                            variants={itemVariants}
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-base-content">Mes coordonnées</h3>
                                <p className="mt-2 text-sm text-base-content/70">
                                    Je réponds rapidement par mail et reste joignable en journée par téléphone.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-start gap-4 rounded-2xl border border-transparent bg-base-100/80 p-4 transition hover:border-sky-200/80">
                                    <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/70 bg-sky-500/10 text-sky-600">
                                        <Mail className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h4 className="text-sm font-semibold text-base-content">Email</h4>
                                        <p className="text-sm text-base-content/75">ibtihel.mnaja@esprit.tn</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl border border-transparent bg-base-100/80 p-4 transition hover:border-sky-200/80">
                                    <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/70 bg-sky-500/10 text-sky-600">
                                        <Phone className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h4 className="text-sm font-semibold text-base-content">Téléphone</h4>
                                        <p className="text-sm text-base-content/75">+216 58 296 768</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl border border-transparent bg-base-100/80 p-4 transition hover:border-sky-200/80">
                                    <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/70 bg-sky-500/10 text-sky-600">
                                        <MapPin className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h4 className="text-sm font-semibold text-base-content">Localisation</h4>
                                        <p className="text-sm text-base-content/75">Tunis, Tunisie</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex h-full flex-col rounded-2xl border border-base-300/60 bg-base-100/90 p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-semibold text-base-content">Envoyez-moi un message</h3>
                            <p className="mt-2 text-sm text-base-content/70">
                                Utilisez ce formulaire pour partager votre besoin, je vous recontacte dans la journée.
                            </p>

                            <form className="mt-6 space-y-5">
                                <div>
                                    <label className="text-sm font-medium text-base-content/70">Nom complet</label>
                                    <input
                                        type="text"
                                        placeholder="Votre nom"
                                        className="mt-2 w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200/80"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-base-content/70">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Votre email"
                                        className="mt-2 w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200/80"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-base-content/70">Message</label>
                                    <textarea
                                        className="mt-2 h-32 w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200/80"
                                        placeholder="Votre message"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn mt-4 w-full rounded-xl border-none bg-sky-500 text-white shadow-md transition hover:bg-sky-600 hover:shadow-xl"
                                >
                                    Envoyer le message
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
