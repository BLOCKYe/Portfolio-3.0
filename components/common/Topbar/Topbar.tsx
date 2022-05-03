/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 03.05.2022
 * Time: 11:08
*/

import React, {Component} from 'react';

interface ITopbar {
    selected: 'home' | 'projects' | 'contact'
}

class Topbar extends Component<ITopbar, any> {
    render() {
        return (
            <div className="flex justify-end gap-5 md:gap-10 text-justWhite-dark">
                <div className="text-extra-color">
                    home
                </div>
                <div className={'transition-all hover:text-justWhite-light cursor-pointer'}>
                    projects
                </div>
                <div className={'transition-all hover:text-justWhite-light cursor-pointer'}>
                    contact
                </div>
            </div>
        );
    }
}

export default Topbar;