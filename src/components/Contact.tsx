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
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div id="Contact" className="bg-base-300 p-10 mb-10 md:mb-32">
            <div className="max-w-6xl mx-auto">
                <Title title="Contactez-moi" />
                <br />
                
                <motion.div 
                    className="flex flex-col md:flex-row gap-8"
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Informations de contact */}
                    <motion.div 
                        className="w-full md:w-1/2 bg-base-100 p-6 rounded-xl shadow-lg"
                        variants={itemVariants}
                    >
                        <h2 className="text-2xl font-bold mb-6">Mes coordonnées</h2>
                        
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Mail className="text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-base-content/80">nourhen.ferjeni26@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <Phone className="text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Téléphone</h3>
                                    <p className="text-base-content/80">+216 92 404 237</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <MapPin className="text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Localisation</h3>
                                    <p className="text-base-content/80">Tunis, Tunisie</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulaire de contact */}
                    <motion.div 
                        className="w-full md:w-1/2 bg-base-100 p-6 rounded-xl shadow-lg"
                        variants={itemVariants}
                    >
                        <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                        
                        <form className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nom complet</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Votre nom" 
                                    className="input input-bordered w-full" 
                                    required 
                                />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="Votre email" 
                                    className="input input-bordered w-full" 
                                    required 
                                />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea 
                                    className="textarea textarea-bordered h-32" 
                                    placeholder="Votre message"
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-accent w-full">
                                Envoyer le message
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;