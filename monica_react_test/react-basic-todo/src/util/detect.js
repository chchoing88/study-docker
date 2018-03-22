import MobileDetect from 'mobile-detect'

const md = (window.md = new MobileDetect(window.navigator.userAgent))

export const isMobile = () => md.mobile()
export const isTablet = () => md.tablet()
export const isAndroid = () => md.is('AndroidOS')
export const isIos = () => md.is('iOS')

export const getVersion = key => md.version(key)
