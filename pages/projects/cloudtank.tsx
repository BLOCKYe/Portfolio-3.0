/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 18.04.2022
 * Time: 23:21
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import Topbar from '../../components/common/Topbar/Topbar';
import Footer from '../../components/common/Footer/Footer';
import projectsData from '../../pages/api/data.json';
import Helpers from '../../utils/Helpers';
import Github from '../../assets/icons/github-small.svg';
import WebsiteLink from '../../assets/icons/link.svg';
import React from 'react';
import Tag from '../../components/common/Tag/Tag';
import Link from 'next/link';
import Back from '../../assets/icons/backicon.svg';

const CloudTank: NextPage = () => {
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
          <Topbar selected={'projects'} />

          <Link href={'/'} passHref>
            <div
              className={
                'flex items-center gap-3 mt-10 md:mt-20 cursor-pointer text-justWhite-dark text-sm hover:text-justWhite-light transition-all group animation-fade-2'
              }>
              <Back
                className={'flex transition-all group-hover:-translate-x-1.5'}
              />
              <div>Back to home page</div>
            </div>
          </Link>

          {/* <--- Header ---> */}
          <div className='flex gap-2 sm:gap-5 mt-5 flex-wrap items-center animation-fade-1 text-justWhite-dark'>
            projects /
            <div className='text-3xl md:text-4xl text-justWhite-light'>
              {projectsData[1].title}
            </div>
          </div>

          <div className='mt-10 text-justWhite-dark text-md md:text-xl animation-fade-2 text-justify md:text-left'>
            {projectsData[1].desc}
          </div>

          <div className='flex gap-3 mt-5 text-sm justify-start flex-wrap md:flex-nowrap animation-fade-3'>
            {projectsData[1].githubLink && (
              <div
                onClick={() => Helpers.navigate(projectsData[1].githubLink)}
                className={
                  'flex items-center gap-5 rounded bg-justDark-light md:bg-justDark-black py-2 px-5 transition-all cursor-pointer hover:text-extra-color'
                }>
                <Github />
                Github
              </div>
            )}

            {projectsData[1].websiteLink && (
              <div
                onClick={() => Helpers.navigate(projectsData[1].websiteLink)}
                className={
                  'flex items-center gap-5 rounded bg-justDark-light md:bg-justDark-black py-2 px-5 transition-all cursor-pointer hover:text-extra-color'
                }>
                <WebsiteLink />
                Website
              </div>
            )}
          </div>

          <div className='flex gap-2 md:gap-3 mt-5 flex-wrap items-center animation-fade-3'>
            <div className={'text-sm bg-[#1F1F1F] text-extra-color p-1'}>
              TAGS
            </div>

            {[].slice.call(projectsData[1].tags).map((tag: string) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <div className={'animation-fade-2'}>
            {/* <--- Gallery ---> */}
            {projectsData[1].images && (
              <>
                {[].slice.call(projectsData[1].images).map((image: string) => (
                  <img
                    src={image}
                    alt={projectsData[1].title}
                    key={image}
                    className={'transition-all w-full mt-5'}
                  />
                ))}
              </>
            )}

            {!projectsData[0].images && (
              <img
                src={projectsData[1].thumbnail}
                alt={projectsData[1].title}
                className={'transition-all w-full mt-5'}
              />
            )}
          </div>

          {/* <--- Footer ---> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CloudTank;
