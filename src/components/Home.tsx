import { Mail, Eye } from "lucide-react";
import cvPdf from '../assets/Ibtihel_mnaja_CV.pdf'; 
import photo from '../assets/photo.jpg';

const Home = () => {
    // Fonction pour ouvrir l'aperçu du CV
    const handlePreviewCV = () => {
        // Ouvre le PDF dans un nouvel onglet
        window.open(cvPdf, '_blank');
    };

    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, je suis {" "} <br />
                    <span className="text-accent text-5xl md:text-5xl"> Ibtihel Mnaja</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Étudiante ingénieure en Data Science <br />
                    Passionnée par l’analyse de données et le ML appliqué, je développe des modèles, des pipelines et des API au service des KPI. <br />
                    En recherche d’un stage de fin d’études à partir de janvier 2026.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <a href="#Contact" className="btn btn-accent md:w-fit">
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </a>
                    <button 
                        onClick={handlePreviewCV}
                        className="btn btn-outline md:w-fit"
                    >
                        <Eye className="w-5 h-5" />
                        Aperçu CV
                    </button>
                </div>
            </div>

            <div className="md:ml-60">
                <img 
                    src={photo} 
                    alt="Photo de profil" 
                    className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </div>
        </div>
    );
};

export default Home;