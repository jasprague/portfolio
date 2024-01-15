import Image, { StaticImageData }  from "next/image"

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
                            <p>{completed ? <a target="_blank" href={link}>{link}</a> : link}</p>
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
                            <p>{completed ? <a target="_blank" className="text-teal-600" href={link}>{link}</a> : link}</p>
                        </div>
                        
                    }
                </div>
            </div>
        </section>

    )
}