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
            <div className="w-full h-[2px] bg-[#3D3D3D] rounded-full relative overflow-hidden">
                <div className={'absolute top-0 left-[-50px] w-5 md:w-10 h-[2px] rounded-full bg-justWhite-light animation-slide-infinite'} />
            </div>
        );
    }
}

export default DividerHorizontal;