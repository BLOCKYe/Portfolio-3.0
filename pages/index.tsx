/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 18.04.2022
 * Time: 23:21
*/

import type {NextPage} from 'next'
import Head from 'next/head'
import Github from '../assets/icons/github.svg'
import LinkedIn from '../assets/icons/linkedin.svg'
import Mail from '../assets/icons/mail.svg'
import ProjectCard from "../components/HomeView/ProjectCard/ProjectCard";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Portfolio - Dominik Obłoza</title>
                <meta name="description"
                    content="Dominik Obłoza - Frontend developer, UI Designer, Digital Creator and Inspirer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={'grid justify-center'}>
                <div className="max-w-5xl w-full p-5 py-10">

                    {/* <--- Navbar ---> */}
                    <div className="flex justify-end gap-5 md:gap-10 text-justWhite-dark">
                        <div className="text-extra-color">
                            home
                        </div>
                        <div className={'transition-all hover:text-justWhite-light cursor-pointer'}>
                            projects
                        </div>
                        <div className={'transition-all hover:text-justWhite-light cursor-pointer'}>
                            contact
                        </div>
                    </div>


                    {/* <--- Header ---> */}
                    <div className="text-3xl md:text-4xl mt-20">
                        Dominik Obłoza
                    </div>

                    <div className="mt-10 text-justWhite-dark text-lg md:text-xl">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm <span className={'text-extra-color'}>Dominik Obłoza</span> - Frontend Developer based in
                        Warsaw, Poland. I specialize in developing web services and websites using
                        <span className={'text-justWhite-light'}> React</span> and
                        <span className={'text-justWhite-light'}> NextJs</span> with Typescript. I design
                        <span className={'text-justWhite-light'}> UI</span> and take care of good
                        <span className={'text-justWhite-light'}> UX</span>.
                        I am also familiar with frameworks such as
                        React Redux, TailwindCSS, Chakra UI, Material UI, Sass. On a daily basis I use git, Gitlab /
                        Github, Figma, Adobe products and web services like Jira / Asana.

                        <br /><br />

                        What <span className={'text-justWhite-light'}>sets me apart</span> is my ambition, creativity,
                        and accuracy. I like solving problems and looking for new solutions. I demonstrate commitment
                        and a fresh approach.
                    </div>

                    {/* <--- Socials ---> */}
                    <div className="flex gap-3 md:gap-5 justify-end mt-20 items-center">

                        <div className="w-full h-[3px] bg-[#262626] rounded-full relative">
                            <div className={'absolute top-0 left-1/3 w-5 md:w-10 h-[3px] rounded-full ' +
                                'bg-justWhite-light'} />
                        </div>

                        <Mail className={'cursor-pointer transition-all icon'} />
                        <LinkedIn className={'cursor-pointer transition-all icon'} />
                        <Github className={'cursor-pointer transition-all icon'} />
                    </div>


                    {/* <--- Previous projects ---> */}
                    <div className="text-3xl md:text-4xl mt-20">
                        Previous projects
                    </div>

                    <div className="mt-5 text-justWhite-dark text-lg md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veniam?
                    </div>


                    {/* <--- Code ---> */}
                    <div className="text-xl md:text-2xl mt-10 text-extra-color">
                        Code
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-5">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>


                    {/* <--- Design ---> */}
                    <div className="text-xl md:text-2xl mt-20 text-extra-color">
                        Design
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-5">
                        <ProjectCard />
                        <ProjectCard />
                    </div>


                    {/* <--- Sandbox ---> */}
                    <div className="text-xl md:text-2xl mt-20 text-extra-color">
                        Sandbox
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-5">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
