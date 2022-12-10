/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 03.05.2022
 * Time: 13:24
*/

export default class Helpers {


    /**
     * This method is used to
     * open link in new tab
     * @param link
     * @private
     */

    public static navigate(link: string | undefined) {

        if (!link) return

        window.open(link, '_blank')
    }
}