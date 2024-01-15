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
        <section className={`mt-40 p-20 ${!isAlternating && 'bg-gray-800'}`}>
            <div className={`flex ${!isAlternating ? 'flex-col-reverse' : "flex-col"} md:flex-row gap-20 text-center md:text-left`}>
                <div className={`content-left ${isAlternating ? "md:w-8/12" : "md:w-4/12"}`}>
                    { isAlternating ?
                        <>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <p>Tech Stack: {techUsed}</p>
                            <p>{link}</p>
                        </>
                        : 
                        <Image src={imageUrl} height="700" width="700" alt="project preview"/>
                        }
                </div>
                <div className={`content-right ${isAlternating ? "md:w-4/12" : "md:w-8/12"}`}>
                    { isAlternating ? 
                        <Image src={imageUrl} alt="project preview"/> 
                        :
                        <>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <p>Tech Stack: {techUsed}</p>
                            <p>{link}</p>
                        </>
                        
                    }
                </div>
            </div>
        </section>

    )
}