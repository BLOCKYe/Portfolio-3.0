/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 03.05.2022
 * Time: 11:30
 */

import React, { Component } from 'react';
import ProjectCard, { IProjectCard } from '../ProjectCard/ProjectCard';

interface IProjectProps {
  data: IProjectCard[];
  title: string;
  subTitle: string;
}

class Projects extends Component<IProjectProps> {
  render() {
    return (
      <div className={'animation-fade-3'}>
        {/* <--- Previous projects ---> */}
        <h1 className='text-md md:text-2xl mt-20'>{this.props.title}</h1>

        <h3 className='mt-1 text-justWhite-dark text-sm'>
          {this.props.subTitle}
        </h3>

        {/* <--- Projects container wrapper ---> */}
        <div className='grid md:grid-cols-2 gap-10 md:gap-5 mt-5'>
          <div className={'grid gap-10 md:gap-5'}>
            {this.props.data
              .slice(0, this.props.data.length / 2)
              .map((project: IProjectCard) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </div>
          <div className={'grid gap-10 md:gap-5'}>
            {this.props.data
              .slice(this.props.data.length / 2, this.props.data.length)
              .map((project: IProjectCard) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
