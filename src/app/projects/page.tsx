import AlternatingContent from "@/app/components/AlternatingContent"
import PortfolioImg from '../../../public/portfolio-preview-min.png'
import YelpCampImg from '../../../public/yelpcamp-preview-min.png'
import HotelImg from '../../../public/Hotel-reservation-min.png'


export default function Projects() {
    const projectData = [
        {
            id: 1,
            name: "Portfolio",
            description: "This is my recent Portfolio Project. This project utilizes the leading edge front-end technologies, creating a robust & optimized user experience.",
            techUsed: "React, Next.js, Typescript, Javascript, Tailwind CSS, Vercel",
            link: "https://github.com/jasprague/portfolio",
            imageUrl: PortfolioImg,
            completed: true
        },
        {
            id: 2,
            name: "YelpCamp",
            description: "This is a fullstack project which allows users to view campgrounds on a cluster map, as well as login functionality and full CRUD operations to create, update, edit, and delete campgrounds and campground reviews.",
            techUsed: "EJS, Bootstrap, Node.js, Express, Authentication, Geoloation Cluster Maps ",
            link: "https://github.com/jasprague/campfinder",
            imageUrl: YelpCampImg,
            completed: false
        },
        {
            id: 3,
            name: "Hotel Management",
            description: "This is a fullstack hotel management website. This application features hotel room management (CRUD), reviews, booking, payment processing, search & filter, and authentication ",
            techUsed: "React, Next.js, Typescript, Sanity.io, Tailwind CSS, Stripe, Vercel ",
            link: "https://github.com/jasprague/hotelmanager",
            imageUrl: HotelImg,
            completed: false
        }
    ]

    return (
        <section>
            <h1 className="text-center mt-48 mb-20">Projects</h1>
            {projectData.map(project => (
                <AlternatingContent key={project.id} id={project.id} description={project.description} name={project.name} imageUrl={project.imageUrl} completed={project.completed} link={project.link} techUsed={project.techUsed} />
            ))}
        </section>
    )
}