/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 03.05.2022
 * Time: 11:30
*/

import React, {Component} from 'react';
import ProjectCard, {IProjectCard} from "../ProjectCard/ProjectCard";

import projectsData from '../../../pages/api/data.json'

class Projects extends Component {
    render() {
        return (
            <div className={'animation-fade-3'}>
                {/* <--- Previous projects ---> */}
                <div className="text-xl md:text-2xl mt-20">
                    Previous projects
                </div>

                <div className="mt-2 text-justWhite-dark text-md">
                    A collection of my past realizations
                </div>


                {/* <--- Projects container wrapper ---> */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-5 mt-5">
                    <div className={'grid gap-10 md:gap-5'}>
                        {[].slice.call(projectsData).slice(0, projectsData.length / 2).map((project: IProjectCard) =>
                            <ProjectCard key={project.id} {...project} />
                        )}
                    </div>
                    <div className={'grid gap-10 md:gap-5'}>
                        {[].slice.call(projectsData).slice(projectsData.length / 2, projectsData.length).map((project: IProjectCard) =>
                            <ProjectCard key={project.id} {...project} />
                        )}
                    </div>
                </div>

            </div>
        );
    }
}

export default Projects;