const screensaver = require('screensaver')
const usbDetect = require('usb-detection')

const yubicoVendorID = 0x1050
const keyRemoved = `remove:${yubicoVendorID}`
usbDetect.on(keyRemoved, screensaver)
usbDetect.startMonitoring()
