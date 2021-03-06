/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 03.05.2022
 * Time: 11:08
*/

import React, {Component} from 'react';
import Link from 'next/link'
import Logo from '../../../assets/images/logo.svg'

interface ITopbar {
    selected: 'home' | 'projects' | 'contact'
}

class Topbar extends Component<ITopbar, any> {
    render() {
        return (
            <div className={'animation-fade-3  flex justify-between gap-1 items-center'}>
                <Logo />
                <div className="flex justify-end gap-5 md:gap-10 text-justWhite-dark flex-wrap">
                    <Link href={'/'} passHref>
                        <div className={this.props.selected === 'home' ? 'text-extra-color' :
                            'transition-all hover:text-justWhite-light cursor-pointer'}>
                            home
                        </div>
                    </Link>
                    <div
                        className={this.props.selected === 'projects' ? 'text-extra-color' :
                            'transition-all hover:text-justWhite-light cursor-pointer'}>
                        projects
                    </div>
                    <Link href={'/contact'} passHref>
                        <div
                            className={this.props.selected === 'contact' ? 'text-extra-color' :
                                'transition-all hover:text-justWhite-light cursor-pointer'}>
                            contact
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Topbar;