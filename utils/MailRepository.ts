/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 08.05.2022
 * Time: 19:24
 */

import { IFormData } from '../interfaces/types';
import axios from 'axios';

export default class MailRepository {
  /**
   * This method is used to
   * create email request
   * @param data
   * @private
   */

  public async sendEmail(data: IFormData) {
    // set config for API
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    // create request
    try {
      return await axios(config);
    } catch (e: any) {
      return e;
    }
  }
}
