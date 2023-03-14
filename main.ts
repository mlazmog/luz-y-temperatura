input.onButtonPressed(Button.B, function () {
    LUZ += 0 + 1
})
input.onButtonPressed(Button.A, function () {
    Temperatura += 0 + 2
})
input.onGesture(Gesture.Shake, function () {
    Temperatura = 0
    LUZ = 0
})
let LUZ = 0
let Temperatura = 0
Temperatura = 0
LUZ = 0
basic.forever(function () {
    if (LUZ == 1) {
        basic.showNumber(input.lightLevel())
    } else if (Temperatura == 2) {
        basic.showNumber(input.temperature())
    }
})
