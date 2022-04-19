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

class ProjectCard extends Component {
    render() {
        return (
            <div className={'bg-justDark-light rounded'}>

                <Image src={CloudTank} alt={'Cloud Tank'} />

                <div className="p-3 md:p-10">
                    <div className="text-lg text-extra-color">
                        Cloudtank.pl
                    </div>

                    <div className="text-md text-justWhite-dark mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores dolores eligendi, ex
                        minus nam natus necessitatibus numquam obcaecati omnis optio perspiciatis quaerat quos repellat
                        repellendus sed similique unde voluptas.
                    </div>

                    <div className="flex gap-3 md:gap-5 mt-5 flex-wrap">
                        <div className="bg-[#373737] p-1 px-3 text-sm rounded">
                            NextJs
                        </div>
                        <div className="bg-[#373737] p-1 px-3 text-sm rounded">
                            Strapi
                        </div>
                        <div className="bg-[#373737] p-1 px-3 text-sm rounded">
                            Chakra UI
                        </div>
                        <div className="bg-[#373737] p-1 px-3 text-sm rounded">
                            MongoDB
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;