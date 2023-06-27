input.onButtonPressed(Button.A, function () {
    for (let índice = 0; índice <= 9; índice++) {
        basic.showNumber(índice)
        basic.showArrow(ArrowNames.East)
        while (!(input.buttonIsPressed(Button.B))) {
            basic.pause(100)
        }
    }
    basic.showString("fin de la partida")
})
basic.showArrow(ArrowNames.West)
