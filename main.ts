radio.onReceivedNumber(function (receivedNumber) {
    radio_number = receivedNumber
    if (radio_number == 1) {
        led.unplot(2, 3)
        pins_left += -1
        radio_number = 0
    } else if (radio_number == 2) {
        led.unplot(1, 1)
        pins_left += -1
        radio_number = 0
    } else if (radio_number == 3) {
        led.unplot(3, 1)
        pins_left += -1
        radio_number = 0
    }
})
let radio_number = 0
led.plot(2, 3)
led.plot(1, 1)
led.plot(3, 1)
radio_number = 0
let pins_left = 3
radio.setGroup(1)
basic.forever(function () {
    if (pins_left == 0) {
        basic.clearScreen()
        basic.showString("GAME OVER")
        basic.pause(5000)
    }
})
