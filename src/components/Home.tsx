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
                    <span className="text-sky-500 text-5xl md:text-5xl"> Ibtihel Mnaja</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Étudiante ingénieure en Data Science, passionnée par l’analyse de données et le ML appliqué, je développe des modèles, des pipelines et des API au service des KPI. <br />
                    En recherche d’un stage de fin d’études à partir de janvier 2026.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <a href="#Contact" className="btn md:w-fit border-none bg-sky-500 text-white shadow-md hover:bg-sky-600">
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </a>
                    <button 
                        onClick={handlePreviewCV}
                        className="btn md:w-fit border-sky-300/70 text-sky-600 hover:border-sky-400 hover:bg-sky-500/10"
                    >
                        <Eye className="w-5 h-5" />
                        Aperçu CV
                    </button>
                </div>
            </div>

            <div className="md:ml-60">
  <div
    className="
      relative overflow-hidden
      aspect-square w-96 md:w-[28rem]
      border-8 border-sky-400/60
      shadow-xl
      [border-radius:30%_70%_70%_30%_/_67%_62%_38%_33%]
    "
  >
    <img
      src={photo}
      alt="Photo de profil"
      className="h-full w-full object-cover"
      style={{ objectPosition: '50% 28%' }}  // adjust 28% up/down to center your face
    />
  </div>
</div>
        </div>
    );
};

export default Home;
