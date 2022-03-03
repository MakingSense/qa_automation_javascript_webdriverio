import moment from 'moment-timezone'

export const DEFAULT_DATE_FORMAT = 'MM/DD/YYYY'
export const DEFAULT_DATE_FORMAT_VARIANT = 'MM-DD-YYYY'
export const DEFAULT_DATE_AND_TIME_FORMAT = 'MM/DD/YYYY hh:mm A'
export const DEFAULT_DATE_AND_TIME_FORMAT_SHORT = 'MM/DD/YY hh:mm A'
export const DEFAULT_TIME_FORMAT = 'h:mm A'
export const DATE_FORMATS = {
    'MM/DD/YYYY': {
        shortest: 'MMM-DD',
        short: 'MM/DD/YY',
        long: 'MM/DD/YYYY',
        verbose: 'MMMM D, YYYY',
    },
    'DD/MM/YYYY': {
        shortest: 'DD-MMM',
        short: 'DD/MM/YY',
        long: 'DD/MM/YYYY',
        verbose: 'D MMMM, YYYY',
    },
}

const locale  = {
    EN: 'en',
    ES: 'es',
    FR_CA: 'fr-ca',
    DE: 'de',
    RU: 'ru',
    ZH_CN: 'zh-cn',
    IT: 'it',
    PL: 'pl',
    CS: 'cs',
    ET: 'et',
}

export function formatDate(dateToFormat, format = DEFAULT_DATE_FORMAT) {
    return moment(dateToFormat).format(format)
}

export function formatCowcardHeaderDates(dateToFormat) {
    return formatDate(dateToFormat, DATE_FORMATS["MM/DD/YYYY"].short)
}
/**
 * Will return true if the inputDate is newer than today. And the opposite.
 * @param date
 * @returns {boolean}
 */

export function isNewerDate(date, fromDateInput) {
    if (!date) {
        return false
    }

    let fromDate = !fromDateInput ? moment() : moment(fromDateInput)

    const res = fromDate.diff(date)
    return res < 0
}

/**
 * Will return the date difference between 2 dates (humanized). If not passed fromDate will be considered as today.
 * @param toDateInput
 * @param fromDateInput
 * @returns {*}
 */

export function datesDiff(toDateInput, fromDateInput, locale= locale.EN) {
    moment.locale(locale)
    const toDate = moment(toDateInput)

    let diff
    if (!fromDateInput) {
        // If not passed, will consider, the fromDate as today.
        diff = toDate.fromNow()
    } else {
        // If comes as parameter, will use that fromDate.
        const fromDate = moment(fromDateInput)
        diff = toDate.from(fromDate)
    }
    return diff
}