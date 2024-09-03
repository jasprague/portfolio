import References from "./References"

interface ContentCardProps {
    forCard: string
}

export default function ContentCard({forCard='Skills'}: ContentCardProps) {
    return (
        <div className="border border-teal-800 rounded-b-2xl px-10">
            <h2 className="text-5xl py-10 text-center">{forCard}</h2>
            {forCard === 'Skills' && (
                <aside className="flex justify-around text-center mb-20 flex-col md:flex-row">
                    <div className="mb-10">
                        <h4 className="text-3xl mb-10">Technical Skills</h4>               
                        <ul className="text-xl leading-8 text-left md:text-center md:text-2xl">
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>SCSS</li>
                            <li>Tailwind CSS</li>
                            <li>Responsive Design</li>
                            <li>GraphQL</li>
                            <li>Node.js</li>
                            <li>Jira</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>EJS</li>
                            <li>Gatsby</li>
                            <li>Contentful CMS</li>
                            <li>Strapi CMS</li>
                            <li>SEO</li>
                            <li>Support Inbox Management</li>
                        </ul>
                    </div>
                    <div>
                            <h4 className="text-3xl mb-10">Soft Skills</h4>               
                            <ul className="text-xl leading-8 text-left md:text-center md:text-2xl">
                                <li>Lifelong Learner</li>
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
                <div className="text-xl md:text-2xl leading-8">
                    <aside className="mb-20 ">
                        <h3 className="text-4xl mb-4">Links Web Design</h3>
                        <h4><u>Position:</u> Web Developer / Account Manager</h4>
                        <h4><u>Length of Time:</u> Current </h4>
                        <p><u>Job Description:</u><br/>at Links Web Design I am a point of contact for our client base of over 500 companies.  I also develop custom websites for new clients as well as fix bugs and add features/updates to our current websites.</p>
                        <p><u>Highlights:</u><br/></p>
                        <ul className="mx-10">
                            <li>Custom Wordpress Website Development.</li>
                            <li>Project Management for premium client projects.</li>
                            <li>Custom HTML, CSS, JavaScript, and PHP Solutions for website updates/bug fixes</li>
                            <li>Assisted in improving website design & development process to reduce turnaround time</li>
                        </ul>
                    </aside>
                    <aside className="mb-20 ">
                        <h3 className="text-4xl mb-4">Fieldroutes, a ServiceTitan Company</h3>
                        <h4><u>Position:</u> Front End Web Developer </h4>
                        <h4><u>Length of Time:</u> 3.5 Years </h4>
                        <p><u>Job Description:</u><br/> As a Front End Web Developer at Fieldroutes, I worked on the Development Support team. My tasks ranged greatly, from debugging our React themes to creating custom pages from XD design files for Premium clients. I managed the internal development inbox, the Jira board, and also conducted many meetings to isolate issues and pain points for our implementation teams.</p>
                        <p><u>Highlights:</u><br/></p>
                        <ul className="mx-10">
                            <li>Reduced Jira ticket backlog items to exceed goal for each quarter.</li>
                            <li>Reduced Developer ticket Response Time & Resolution Time by over 100%.</li>
                            <li>Played major role in meeting hard deadline of mission-critical CMS transfer project ahead of time.</li>
                            <li>Always delivered custom work accurately & within quoted timeframe.</li>
                        </ul>
                    </aside>
                    <aside className="mb-20">
                        <h3 className="text-4xl mb-4">Lobster Marketing</h3>
                        <h4><u>Position:</u> Support Agent</h4>
                        <h4><u>Length of Time:</u> 1.5 Years </h4>
                        <p><u>Job Description:</u><br/> As a Support Agent at Lobster Marketing, I was responsible for a vast array of tasks including: </p>
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
                        <h4><u>Position:</u> General Manager </h4>
                        <h4><u>Length of Time:</u> 8 Years </h4>
                        <p><u>Job Description:</u><br/> As the General Manager of Governor's Restaurant, I was responsible for all operational and managerial duties. These included: </p>
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
                </div>
            )}
            {forCard === "References" && (
                <References />
            )}
        </div>
    )
}