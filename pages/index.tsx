/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 18.04.2022
 * Time: 23:21
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import Github from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Mail from '../assets/icons/mail.svg';
import DividerHorizontal from '../components/common/Divider/DividerHorizontal';
import Topbar from '../components/common/Topbar/Topbar';
import Footer from '../components/common/Footer/Footer';
import Projects from '../components/home/PreviousProjects/Projects';
import Helpers from '../utils/Helpers';

import projectsData from '../pages/api/data.json';
import recentProjectsData from '../pages/api/recentData.json';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Dominik Obłoza</title>
        <meta
          name='description'
          content='Dominik Obłoza - Frontend developer, UI Designer, Digital Creator and Inspirer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <--- Page content wrapper ---> */}
      <div className={'grid justify-center'}>
        <div className='max-w-5xl w-full p-5 py-10'>
          {/* <--- Top bar navigation ---> */}
          <Topbar selected={'home'} />

          {/* <--- Header ---> */}
          <div className='text-3xl md:text-4xl mt-10 animation-fade-1'>
            <span className={'text-justWhite-dark'}>Dominik</span>
            <span className={'font-bold text-extra-color'}> Obłoza</span>
            <p className={'text-sm text-justWhite-dark'}>Warsaw, Poland</p>
          </div>

          <div className='mt-10 animation-fade-2 text-justify md:text-left'>
            <h3 className={'font-bold text-lg'}>Experience</h3>
            <p className={'mt-1 text-sm mb-5'}>
              I specialise in Web Developing and UI design, especially ERP & CRM
              systems.
            </p>

            <h3
              className={
                'font-bold text-lg pt-5 border-t-justDark-light border-t-[1px]'
              }>
              About me
            </h3>
            <p className={'mt-1 text-sm text-justWhite-dark'}>
              I am
              <span className={'text-justWhite-light'}> Dominik Obłoza</span>, a
              Frontend Developer with expertise in the development of web
              services and applications utilizing{' '}
              <span className={'text-justWhite-light'}>
                React & NextJs & Typescript.
              </span>{' '}
              I am well-versed in frameworks such as{' '}
              <span className={'text-justWhite-light'}>
                {' '}
                React Redux, TailwindCSS, MaterialUI, Jest, Cypress and Docker.{' '}
              </span>{' '}
              My proficiency extends to designing intuitive user interfaces.
              <br />
              <br />
              In the course of my work, I regularly utilize version control
              systems like git, collaborative platforms such as Gitlab and
              Github, design tools like Figma, Adobe products, and project
              management tools like Jira and Asana.
              <br />
              <br />
              What distinguishes my professional approach are qualities such as{' '}
              <span className={'text-justWhite-light'}>
                ambition, creativity, and commitment.{' '}
              </span>{' '}
              I am adept at problem-solving and consistently seek innovative
              solutions. My commitment and fresh perspective contribute to my
              effectiveness in{' '}
              <span className={'text-justWhite-light'}>
                {' '}
                delivering high-quality results.{' '}
              </span>
            </p>
          </div>

          {/* <--- Socials ---> */}
          <div className='flex gap-3 md:gap-5 justify-end mt-20 items-center animation-fade-3'>
            <DividerHorizontal />

            <Mail
              onClick={() =>
                Helpers.navigate('mailto:kontakt@dominikobloza.pl')
              }
              className={'cursor-pointer transition-all icon'}
            />
            <LinkedIn
              onClick={() =>
                Helpers.navigate(
                  'https://www.linkedin.com/in/dominik-ob%C5%82oza-5aa61021b/'
                )
              }
              className={'cursor-pointer transition-all icon'}
            />
            <Github
              onClick={() => Helpers.navigate('https://github.com/BLOCKYe/')}
              className={'cursor-pointer transition-all icon'}
            />
          </div>

          {/* <--- Recent projects ---> */}
          <Projects
            title={'Most recent side-projects'}
            subTitle={"Projects I've been working on recently"}
            data={recentProjectsData}
          />

          <div className={'mt-20'}>
            <DividerHorizontal />
          </div>

          {/* <--- Previous projects board ---> */}
          <Projects
            title={'Previous projects'}
            subTitle={'A collection of my past side projects'}
            data={projectsData}
          />

          {/* <--- Footer ---> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
