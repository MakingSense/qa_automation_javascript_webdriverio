class CSSHelper {

    /**
     * Get Hexadecimal Value given to an DOMs Element
     *
     * Exmaple: CSSHelper.getHexadecimalColor(super.getCssProperty(selector, cssAttribute));
     * @param property
     * @returns {string}
     */
    static getHexadecimalColor(property) {
        return property.parsed.hex;
    }

    /**
     * Get RGBA Value given to an DOMs Element
     * @param property
     * @returns {string}
     */
    static getRGBAColor(property) {
        return property.parsed.rgba;
    }

    /**
     * Get ALPHA Value given to an DOMs Element
     * @param property
     * @returns {string}
     */
    static getAlphaColor(property) {
        return property.parsed.alpha;
    }
}
module.exports = CSSHelper;