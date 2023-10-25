input.onPinPressed(TouchPin.P0, function () {
    makerbit.clearLcd1602()
    _of_options += 1
    makerbit.showStringOnLcd1602("" + (_of_options), makerbit.position1602(LcdPosition1602.Pos1), 16)
})
input.onPinReleased(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
})
input.onButtonPressed(Button.A, function () {
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("Magic No Box", makerbit.position1602(LcdPosition1602.Pos1), 16)
})
input.onPinPressed(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    makerbit.clearLcd1602()
    NO_List = randint(0, 16)
    if (NO_List == 0) {
        makerbit.showStringOnLcd1602("NO", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 1) {
        makerbit.showStringOnLcd1602("Heck NO", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 2) {
        makerbit.showStringOnLcd1602("No Thanks", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 3) {
        makerbit.showStringOnLcd1602("Nah", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 4) {
        makerbit.showStringOnLcd1602("Umm... no", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 5) {
        makerbit.showStringOnLcd1602("No Can Do", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 6) {
        makerbit.showStringOnLcd1602("Nein", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 7) {
        makerbit.showStringOnLcd1602("If Only I Could", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 8) {
        makerbit.showStringOnLcd1602("Not Possible", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 9) {
        makerbit.showStringOnLcd1602("No Way", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 10) {
        makerbit.showStringOnLcd1602("Not now", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 11) {
        makerbit.showStringOnLcd1602("Unfortunately Not", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 12) {
        makerbit.showStringOnLcd1602("Not Interested", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 13) {
        makerbit.showStringOnLcd1602("I'll Pass", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 14) {
        makerbit.showStringOnLcd1602("We'll See", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else if (NO_List == 15) {
        makerbit.showStringOnLcd1602("Hell NO!", makerbit.position1602(LcdPosition1602.Pos1), 16)
    } else {
        makerbit.showStringOnLcd1602("Nope", makerbit.position1602(LcdPosition1602.Pos1), 16)
    }
})
input.onGesture(Gesture.Shake, function () {
    makerbit.clearLcd1602()
    _of_options = randint(1, _of_options)
    makerbit.showStringOnLcd1602("Your Decision Is...", makerbit.position1602(LcdPosition1602.Pos1), 16)
    basic.pause(2000)
    makerbit.showStringOnLcd1602("" + (_of_options), makerbit.position1602(LcdPosition1602.Pos1), 16)
    _of_options = 0
})
let NO_List = 0
let _of_options = 0
_of_options = 0
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.Off)
basic.pause(100)
makerbit.setLcdBacklight(LcdBacklight.On)
makerbit.showStringOnLcd1602("Magic No Box", makerbit.position1602(LcdPosition1602.Pos1), 16)
