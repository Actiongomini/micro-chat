input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendValue("BEEP", 1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("YES")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NO")
})
radio.onReceivedValue(function (name, value) {
    if (name == "BEEP") {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 100)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("HELLO")
})
basic.forever(function () {
	
})
