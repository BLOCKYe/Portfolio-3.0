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
                'overflow-hidden group hover:border-b-extra-color'}>

                <img src={this.props.thumbnail} alt={this.props.title}
                    className={'group-hover:scale-105 transition-all w-full'} />

                <div className="p-3 md:p-10 py-10">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="text-xl text-extra-color">
                            {this.props.title}
                        </div>

                        <div className="text-sm text-justWhite-dark">
                            {this.props.date}
                        </div>
                    </div>

                    <div className="text-md text-justWhite-dark mt-3">
                        {this.props.desc}
                    </div>

                    <div className="flex gap-3 mt-5 text-sm justify-between flex-wrap md:flex-nowrap">
                        {this.props.githubLink && (
                            <div onClick={() => Helpers.navigate(this.props.githubLink)}
                                className={'w-full justify-center flex items-center gap-5 rounded bg-justDark-black py-2 px-5 transition-all cursor-pointer hover:text-extra-color'}>
                                <Github />
                                Github
                            </div>
                        )}

                        {this.props.websiteLink && (
                            <div onClick={() => Helpers.navigate(this.props.websiteLink)}
                                className={'w-full justify-center flex items-center gap-5 rounded bg-justDark-black py-2 px-5 transition-all cursor-pointer hover:text-extra-color'}>
                                <Link />
                                Website
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2 md:gap-3 mt-5 flex-wrap items-center">

                        <div className={'text-sm bg-[#1F1F1F] text-extra-color p-1'}>
                            TAGS
                        </div>

                        {[].slice.call(this.props.tags).map((tag: string) =>
                            <Tag key={tag} text={tag} />
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

export default ProjectCard;