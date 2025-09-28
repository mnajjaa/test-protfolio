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
                duration: 0.6,
            },
        },
    };

    return (
        <section id="Contact" className="bg-base-100 py-14 md:py-20 px-6">
            <div className="mx-auto max-w-4xl px-4 md:px-6">
                <Title title="Restons en contact" />

                
                    
                       

                        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <div className="flex min-w-[14rem] flex-1 items-center gap-4 rounded-2xl border border-transparent bg-base-100/80 p-4 transition hover:border-sky-200/80">
                                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-sky-200/70 bg-sky-500/10 text-sky-600">
                                    <Mail className="h-5 w-5" />
                                </span>
                                <div>
                                    <h4 className="text-sm font-semibold text-base-content">Email</h4>
                                    <p className="text-sm text-base-content/75">ibtihel.mnaja@esprit.tn</p>
                                </div>
                            </div>

                            <div className="flex min-w-[14rem] flex-1 items-center gap-4 rounded-2xl border border-transparent bg-base-100/80 p-4 transition hover:border-sky-200/80">
                                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-sky-200/70 bg-sky-500/10 text-sky-600">
                                    <Phone className="h-5 w-5" />
                                </span>
                                <div>
                                    <h4 className="text-sm font-semibold text-base-content">Téléphone</h4>
                                    <p className="text-sm text-base-content/75">+216 58 296 768</p>
                                </div>
                            </div>

                            <div className="flex min-w-[14rem] flex-1 items-center gap-4 rounded-2xl border border-transparent bg-base-100/80 p-4 transition hover:border-sky-200/80">
                                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-sky-200/70 bg-sky-500/10 text-sky-600">
                                    <MapPin className="h-5 w-5" />
                                </span>
                                <div>
                                    <h4 className="text-sm font-semibold text-base-content">Localisation</h4>
                                    <p className="text-sm text-base-content/75">Tunis, Tunisie</p>
                                </div>
                            </div>
                        </div>
            </div>
        </section>
    );
};

export default Contact;
