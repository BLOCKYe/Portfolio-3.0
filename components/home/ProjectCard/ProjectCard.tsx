/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 19.04.2022
 * Time: 21:38
 */

import React, { Component } from 'react';
import Github from '../../../assets/icons/github-small.svg';
import WebsiteLink from '../../../assets/icons/link.svg';
import NextIcon from '../../../assets/icons/nexticon.svg';
import Tag from '../../common/Tag/Tag';
import Helpers from '../../../utils/Helpers';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal';
import Link from 'next/link';
import Back from '../../../assets/icons/backicon.svg';

export interface IProjectCard {
  title: string;
  desc: string;
  tags: string[];
  date: string;
  githubLink?: string;
  websiteLink?: string;
  thumbnail: string;
  category: string;
  id: number;
  link?: string;
  images?: string[];
}

interface IStateProjectCard {
  isModalOpen: boolean;
}

class ProjectCard extends Component<IProjectCard, IStateProjectCard> {
  constructor(props: any) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return (
      <>
        <div
          className={
            'md:bg-justDark-light transition-all overflow-hidden group border-b-2 border-[#3D3D3D] md:border-justDark-light hover:border-b-extra-color'
          }>
          <img
            src={this.props.thumbnail}
            alt={this.props.title}
            onClick={this.openModal}
            className={
              'group-hover:scale-105 transition-all w-full cursor-pointer'
            }
          />

          <div className='md:p-10 py-10'>
            <div className='flex items-center gap-3 justify-between flex-wrap'>
              <h1 className='text-md text-extra-color'>{this.props.title}</h1>

              <p className='text-sm text-justWhite-dark'>{this.props.date}</p>
            </div>

            <p className='text-sm md:text-sm text-justWhite-dark mt-3'>
              {this.props.desc}
            </p>

            <div className='flex gap-3 mt-5 text-sm justify-between'>
              {this.props.githubLink && (
                <div
                  onClick={() => Helpers.navigate(this.props.githubLink)}
                  className={
                    'w-full justify-center flex items-center gap-2 md:gap-5 rounded bg-justDark-light md:bg-justDark-black py-2 px-5 transition-all cursor-pointer hover:text-extra-color'
                  }>
                  <Github />
                  Github
                </div>
              )}

              {this.props.websiteLink && (
                <div
                  onClick={() => Helpers.navigate(this.props.websiteLink)}
                  className={
                    'w-full justify-center flex items-center gap-2 md:gap-5 rounded bg-justDark-light md:bg-justDark-black py-2 px-5 transition-all cursor-pointer hover:text-extra-color'
                  }>
                  <WebsiteLink />
                  Website
                </div>
              )}
            </div>

            <div className='flex gap-1 md:gap-2 mt-5 flex-wrap items-center'>
              <div className={'text-sm bg-[#1F1F1F] text-extra-color p-1'}>
                TAGS
              </div>

              {this.props.tags.map((tag: string) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>

            {this.props.link && (
              <Link href={this.props.link} passHref>
                <div
                  className={
                    'flex items-center gap-3 mt-5 cursor-pointer text-justWhite-dark ' +
                    'text-sm hover:text-justWhite-light transition-all group justify-end px-3'
                  }>
                  More about project
                  <NextIcon
                    className={
                      'flex transition-all group-hover:translate-x-1.5'
                    }
                  />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* <--- Modal with gallery preview ---> */}
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <ModalOverlay />
          <ModalContent
            className={
              '!bg-justDark-black !text-justWhite-light !w-full !max-w-6xl'
            }>
            <div className='p-3 md:px-10'>
              <ModalCloseButton />

              <div className='flex items-center gap-3 flex-wrap mt-5'>
                <div className='text-md text-extra-color'>
                  {this.props.title}
                </div>

                <div className='text-sm text-justWhite-dark'>
                  {this.props.date}
                </div>
              </div>

              <div className='text-sm md:text-sm text-justWhite-dark mt-3'>
                {this.props.desc}
              </div>
            </div>

            {this.props.images && (
              <>
                {[].slice.call(this.props.images).map((image: string) => (
                  <img
                    src={image}
                    alt={this.props.title}
                    key={image}
                    className={'transition-all w-full mt-5'}
                  />
                ))}
              </>
            )}

            {!this.props.images && (
              <img
                src={this.props.thumbnail}
                alt={this.props.title}
                className={'transition-all w-full mt-5'}
              />
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  private closeModal() {
    this.setState({ isModalOpen: false });
  }

  private openModal() {
    this.setState({ isModalOpen: true });
  }
}

export default ProjectCard;
