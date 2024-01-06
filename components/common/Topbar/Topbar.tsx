/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 03.05.2022
 * Time: 11:08
 */

import React, { Component } from 'react';
import Link from 'next/link';
import Logo from '../../../assets/images/logo.svg';

interface ITopbar {
  selected: 'home' | 'projects' | 'contact';
}

class Topbar extends Component<ITopbar, any> {
  /**
   *
   * @param isSelected
   * @private
   */
  private linkStyleFactory(isSelected: boolean): string {
    if (isSelected) return 'text-extra-color text-sm';

    return 'transition-all hover:text-justWhite-light cursor-pointer text-sm';
  }

  render() {
    return (
      <div
        className={'animation-fade-3  flex justify-between gap-1 items-center'}>
        <Logo />
        <div className='flex justify-end gap-5 md:gap-10 text-justWhite-dark flex-wrap'>
          <Link href={'/'} passHref>
            <div
              className={this.linkStyleFactory(this.props.selected === 'home')}>
              Home
            </div>
          </Link>

          <Link href={'/contact'} passHref>
            <div
              className={this.linkStyleFactory(
                this.props.selected === 'contact'
              )}>
              Contact me
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Topbar;
