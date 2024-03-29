import Image, { StaticImageData }  from "next/image"
import Button from "./Button"

interface AlternatingContentProps {
    id: number,
    name: string,
    description: string,
    techUsed: string,
    link: string,
    imageUrl: StaticImageData,
    completed: boolean
}

export default function AlternatingContent({id, name, description, techUsed, link, imageUrl, completed}:AlternatingContentProps) {

    const isAlternating = id % 2 === 0
    return (
        <section className={`my-10 md:p-20 w-full text-lg lg:text-xl ${!isAlternating && 'bg-gray-800'}`}>
            <div className={`flex ${!isAlternating ? 'flex-col-reverse' : "flex-col"} items-center md:flex-row text-left py-20 md:py-0 md:gap-20 justify-around`}>
                <div className={`content-left w-full ${isAlternating ? "md:w-8/12" : "md:w-4/12"} px-5`}>
                    { isAlternating ?
                        <div className="flex flex-col justify-between h-full gap-5 pb-10">
                            <h2 className="text-center">{name} {!completed && "(Coming Soon)"}</h2>
                            <p>{description}</p>
                            <p><u>Tech Stack:</u> {techUsed}</p>
                            { name === "Portfolio" && 
                                <p>This portfolio has a perfect lighthouse score in Performance, SEO, Accessibility, Best Practices, and PWA Optimization</p>
                            }
                            { completed && <Button text='View on Github' withinContent={true} color="cta" path={link}/> }
                        </div>
                        : 
                        <Image src={imageUrl} height="700" width="700" alt="project preview"/>
                        }
                </div>
                <div className={`content-right ${isAlternating ? "md:w-4/12" : "md:w-8/12"} px-5`}>
                    { isAlternating ? 
                        <Image src={imageUrl} alt="project preview"/> 
                        :
                        <div className="flex flex-col justify-between h-full gap-5 pb-10">
                            <h2 className="text-center">{name} {!completed && "(Coming Soon)"}</h2>
                            <p>{description}</p>
                            <p><u>Tech Stack:</u> {techUsed}</p>
                            { name === "Portfolio" && 
                                <i>This portfolio has a perfect lighthouse score in Performance, SEO, Accessibility, Best Practices, and PWA Optimization.</i>
                            }
                            { completed && <Button text='View on Github' withinContent={true} color="cta" path={link}/> }
                        </div>
                        
                    }
                </div>
            </div>
        </section>

    )
}