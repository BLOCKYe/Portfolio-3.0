/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 03.05.2022
 * Time: 11:04
*/

import React, {Component} from 'react';

class DividerHorizontal extends Component {
    render() {
        return (
            <div className="w-full h-[3px] bg-[#3D3D3D] rounded-full relative">
                <div className={'absolute top-0 left-1/3 w-5 md:w-10 h-[3px] rounded-full ' +
                    'bg-justWhite-light'} />
            </div>
        );
    }
}

export default DividerHorizontal;