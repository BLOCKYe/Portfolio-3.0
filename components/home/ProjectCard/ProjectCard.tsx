/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 19.04.2022
 * Time: 21:38
*/

import React, {Component} from 'react';
import Image from "next/image";
import Github from '../../../assets/icons/github-small.svg'
import Link from '../../../assets/icons/link.svg'
import CloudTank from '../../../public/images/code/cloudtank.png'
import Tag from "../../common/Tag/Tag";
import Helpers from "../../../kernel/Helpers";

export interface IProjectCard {
    title: string,
    desc: string,
    tags: string[],
    date: string,
    githubLink?: string,
    websiteLink?: string,
    thumbnail: string,
    category: 'code' | 'design' | 'sandbox',
    id: number,
    link?: string
}

class ProjectCard extends Component<IProjectCard, any> {

    render() {
        return (
            <div className={'bg-justDark-light transition-all border-[1px] border-justDark-light hover:border-[1px] ' +
                    'overflow-hidden group'}>

                <img src={this.props.thumbnail} alt={this.props.title}
                    className={'group-hover:scale-105 transition-all'} />

                <div className="p-3 md:p-10">
                    <div className="flex items-center justify-between flex-wrap mt-5 md:mt-0 ">
                        <div className="text-xl text-extra-color">
                            {this.props.title}
                        </div>

                        <div className="flex gap-1">
                            {this.props.githubLink && (
                                <Github onClick={() => Helpers.navigate(this.props.githubLink)}
                                    className={'cursor-pointer transition-all icon !min-w-fit'} />
                            )}

                            {this.props.websiteLink && (
                                <Link onClick={() => Helpers.navigate(this.props.websiteLink)}
                                    className={'cursor-pointer transition-all icon !min-w-fit'} />
                            )}
                        </div>
                    </div>

                    <div className="text-md text-justWhite-dark mt-3 group-hover:text-justWhite-light transition-all">
                        {this.props.desc}
                    </div>

                    <div className="flex gap-2 md:gap-3 mt-5 flex-wrap">
                        {[].slice.call(this.props.tags).map((tag: string) =>
                            <Tag key={tag} text={tag} />
                        )}
                    </div>

                    <div className="mt-5 text-sm text-justWhite-dark">
                        {this.props.date}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;