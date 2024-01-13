import Slider from 'react-slick';


export default function References() {
    const referenceList=[{review: "Jason is a rare combination of talent, efficiency, work ethic, and impeccable character. I would highly recommend him! You can teach/learn skills, but the qualities Jason possesses are rarely found. Best of luck to you Jason! ", id: 1, reviewer: "Direct Manager - Fieldroutes"}, {review: "I lost count of the number of times Jason's skills amazed me. He's a motivated developer who is hungry for knowledge and could have 'initiative' carved as his middle name. His people skills are on another level; I have seen Jason mediate flawless meetings with non-technical stakeholders. His ability to break down complex topics is exceptional and rare. If you are looking for a professional to bridge the communication gap between technical and non-technical stakeholders and who is eager to learn and grow with the company, Jason is your person.", id: 2, reviewer: 'Senior Developer - Fieldroutes'}, {review: "Jason is such an incredible coworker. He's passionate and always available to help a teammate. At FieldRoutes we faced so many unique challenges and Jason was ready and eager to attack them face-on. I hope one day I'm able to work with Jason again.", id: 3, reviewer: "Manager of SEO - Fieldroutes"}, {review: "I have had the pleasure of working with Jason, and his skills and professionalism have consistently impressed me. Jason has shown exceptional aptitude in technologies such as ReactJs and Content Management Systems (CMS). His technical proficiency is matched by his capacity for rapid learning and adaptation, making him a valuable asset in fast-paced and evolving project environments.  Beyond his technical abilities, what truly sets Jason apart is his team spirit and work ethic. He is not only a reliable and diligent worker but also a proactive contributor who is always ready to lend a hand to his colleagues. His attitude and willingness to help have significantly contributed to the success of our projects. I have no doubt that Jason's expertise and passion for software development will greatly benefit any organization fortunate enough to have him on board.", id: 4, reviewer: "Senior Software Engineer - Fieldroutes"} ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true
      };
    return (
        <section className="p-20">
        <Slider {...settings}>
            {referenceList.map(r => (
                <div key={r.id}>
                    <q>{r.review}</q>
                    <p key={r.id}className="text-right mt-10">- {r.reviewer}</p>
                </div>


            ))}
        </Slider>
        </section>
    )
}