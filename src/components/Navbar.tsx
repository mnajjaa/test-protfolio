import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4 ">
            <a href="#"
                className="flex items-center  font-bold  text-3xl md:text-xl"
            >
                <Container className="mr-2" />
                DATA
                <span className="text-sky-500">SCIENCE</span>
            </a>

            <ul
                className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home"
                        className="btn btn-sm btn-ghost text-base-content hover:bg-sky-500/10 hover:text-sky-600"
                    >
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About"
                        className="btn btn-sm btn-ghost text-base-content hover:bg-sky-500/10 hover:text-sky-600"
                    >
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#Competences"
                        className="btn btn-sm btn-ghost text-base-content hover:bg-sky-500/10 hover:text-sky-600"
                    >
                        Mes compétences
                    </a>
                </li>
                <li>
                    <a href="#Experiences"
                        className="btn btn-sm btn-ghost text-base-content hover:bg-sky-500/10 hover:text-sky-600"
                    >
                        Mes expériences
                    </a>
                </li>


                <li>
                    <a href="#Projects"
                        className="btn btn-sm btn-ghost text-base-content hover:bg-sky-500/10 hover:text-sky-600"
                    >
                        Mes projets
                    </a>
                </li>
                <li>
    <a href="#Contact"
        className="btn btn-sm btn-ghost text-base-content hover:bg-sky-500/10 hover:text-sky-600"
    >
        Contact
    </a>
</li>

            </ul>

        </div>
    )
}

export default Navbar

