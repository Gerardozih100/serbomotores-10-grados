input.onButtonPressed(Button.A, function () {
    if (Posicion == 181) {
        Posicion = 0
    } else {
        Posicion += 0 + 10
    }
    servos.P0.setAngle(Posicion)
})
input.onButtonPressed(Button.B, function () {
    if (Posicion == -1) {
        Posicion = 180
    } else {
        Posicion += 0 - 10
    }
    servos.P0.setAngle(Posicion)
})
let Posicion = 0
Posicion = 90
servos.P0.setAngle(Posicion)
basic.forever(function () {
    basic.showNumber(Posicion)
})
