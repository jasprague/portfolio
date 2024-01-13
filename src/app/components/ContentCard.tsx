import References from "./References"

interface ContentCardProps {
    forCard: string
}

export default function ContentCard({forCard='Skills'}: ContentCardProps) {
    return (
        <div className="border border-teal-800 rounded-b-2xl px-10">
            <h2 className="text-5xl py-10 text-center">{forCard}</h2>
            {forCard === 'Skills' && (
                <aside className="flex justify-around text-center mb-20">
                    <div>
                        <h4 className="text-4xl mb-10">Technical Skills</h4>               
                        <ul>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Gatsby</li>
                            <li>Next.js</li>
                            <li>GraphQL</li>
                            <li>Node.js</li>
                            <li>Jira</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>EJS</li>
                            <li>Contentful CMS</li>
                            <li>Strapi CMS</li>
                            <li>SEO</li>
                            <li>Support Inbox Management</li>
                        </ul>
                    </div>
                    <div>
                            <h4 className="text-4xl mb-10">Soft Skills</h4>               
                            <ul>
                                <li>Life Long Learner</li>
                                <li>People Leader</li>
                                <li>Product Management</li>
                                <li>Problem Solving</li>
                                <li>Attention To Detail</li>
                                <li>Strong Communicator</li>
                                <li>Work Ethic</li>
                                <li>Integrity & Professionalism</li>
                                <li>Works Well Under Pressure</li>
                                
                            </ul>
                    </div>
                </aside>


            )}
            {forCard === 'Experience' && (
                <>
                    <aside className="mb-20">
                        <h3 className="text-4xl mb-4">Fieldroutes, a ServiceTitan Company</h3>
                        <h4>Position: Front End Web Developer </h4>
                        <h4>Length of Time: 3.5 Years </h4>
                        <p>Job Description:<br/> As a Front End Web Developer at Fieldroutes, I worked on the Development Support team. My tasks ranged greatly, from debugging our React themes to creating custom pages for Premium clients. I managed the internal development inbox, the Jira board, and also conducted many meetings to isolate issues and pain points for our implementation teams.</p>
                    </aside>
                    <aside className="mb-20">
                        <h3 className="text-4xl mb-4">Lobster Marketing</h3>
                        <h4>Position: Support Agent</h4>
                        <h4>Length of Time: 1.5 Years </h4>
                        <p>Job Description:<br/> As a Support Agent at Lobster Marketing, I was responsible for a vast array of tasks including: </p>
                        <ul className="mx-10">
                            <li>Managing Support Inbox</li>
                            <li>Client Onboarding</li>
                            <li>Project Management</li>
                            <li>Local SEO and PPC</li>
                            <li>Salesforce automations</li>
                            <li>CMS Edits</li>
                        </ul>
                    </aside>
                    <aside className="mb-20">
                        <h3 className="text-4xl mb-4">Governor's Restaurant</h3>
                        <h4>Position: General Manager </h4>
                        <h4>Length of Time: 8 Years </h4>
                        <p>Job Description:<br/> As the General Manager of Governor's Restaurant, I was respondible for all operational and managerial duties. These included: </p>
                        <ul className="mx-10">
                            <li>Scheduling</li>
                            <li>Hiring & Firing</li>
                            <li>Food Ordering</li>
                            <li>Kitchen Operations</li>
                            <li>Dining Room Operations</li>
                            <li>Training</li>
                            <li>Conducting Safety & Team Meetings</li>
                        </ul>
                    </aside>
                </>
            )}
            {forCard === "References" && (
                <References />
            )}
        </div>
    )
}