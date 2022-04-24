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
import CloudTank from '../../../assets/images/cloudtank.png'
import Tag from "../../Tag/Tag";

class ProjectCard extends Component {

    private readonly tags = ['NextJs', 'ChakraUI', 'Strapi', 'MongoDB']

    render() {
        return (
            <div
                className={'bg-justDark-light transition-all border-[1px] border-justDark-light hover:border-[1px] ' +
                    'hover:border-extra-color cursor-pointer overflow-hidden group'}>

                <Image src={CloudTank} alt={'Cloud Tank'} className={'group-hover:scale-105 transition-all'}/>

                <div className="p-3 md:p-10">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="text-xl text-extra-color">
                            Cloudtank.pl
                        </div>

                        <div className="flex gap-1">
                            <Github />
                            <Link />
                        </div>
                    </div>

                    <div className="text-md text-justWhite-dark mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores dolores eligendi, ex
                        minus nam natus necessitatibus numquam obcaecati omnis.
                    </div>

                    <div className="flex gap-2 md:gap-3 mt-5 flex-wrap">
                        {[].slice.call(this.tags).map((tag: string) =>
                            <Tag text={tag} />
                        )}
                    </div>

                    <div className="mt-5 text-sm text-justWhite-dark">
                        October 2021
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;