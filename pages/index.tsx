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
import DividerHorizontal from "../components/common/Divider/DividerHorizontal";
import Topbar from "../components/common/Topbar/Topbar";
import Footer from "../components/common/Footer/Footer";
import Projects from "../components/home/PreviousProjects/Projects";
import Helpers from "../kernel/Helpers";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Portfolio - Dominik Obłoza</title>
                <meta name="description"
                    content="Dominik Obłoza - Frontend developer, UI Designer, Digital Creator and Inspirer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            {/* <--- Page content wrapper ---> */}
            <div className={'grid justify-center'}>
                <div className="max-w-5xl w-full p-5 py-10">


                    {/* <--- Top bar navigation ---> */}
                    <Topbar selected={'home'} />


                    {/* <--- Header ---> */}
                    <div className="text-3xl md:text-4xl mt-10 md:mt-20 animation-fade-1">
                        Frontend Developer
                        <br />
                        UI Designer
                    </div>

                    <div className="mt-10 text-justWhite-dark text-md md:text-xl animation-fade-2 text-justify md:text-left">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm <span className={'text-extra-color'}>Dominik Obłoza</span> - Frontend Developer based in
                        Warsaw, Poland. I specialize in developing web services and websites using
                        <span className={'text-justWhite-light'}> React</span> and
                        <span className={'text-justWhite-light'}> NextJs</span> with Typescript. I design
                        <span className={'text-justWhite-light'}> UI</span> and take care of good
                        <span className={'text-justWhite-light'}> UX</span>.
                        I am also familiar with frameworks such as
                        React Redux, TailwindCSS, Chakra UI, Material UI and Sass. On a daily basis I use git, Gitlab /
                        Github, Figma, Adobe products and web services like Jira / Asana.

                        <br /><br />

                        What <span className={'text-justWhite-light'}>sets me apart</span> is my ambition, creativity
                        and accuracy. I like solving problems and looking for new solutions. I demonstrate commitment
                        and a fresh approach.
                    </div>


                    {/* <--- Socials ---> */}
                    <div className="flex gap-3 md:gap-5 justify-end mt-20 items-center animation-fade-3">

                        <DividerHorizontal />

                        <Mail onClick={() => Helpers.navigate("mailto:kontakt@dominikobloza.pl")}
                            className={'cursor-pointer transition-all icon'} />
                        <LinkedIn
                            onClick={() => Helpers.navigate("https://www.linkedin.com/in/dominik-ob%C5%82oza-5aa61021b/")}
                            className={'cursor-pointer transition-all icon'} />
                        <Github onClick={() => Helpers.navigate("https://github.com/BLOCKYe/")}
                            className={'cursor-pointer transition-all icon'} />
                    </div>


                    {/* <--- Previous projects board ---> */}
                    <Projects />


                    {/* <--- Footer ---> */}
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Home
