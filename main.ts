input.onButtonPressed(Button.A, function () {
    segundos += -1
    basic.showString("" + (segundos.toString()))
})
input.onGesture(Gesture.Shake, function () {
    if (segundos > 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        while (segundos > 0) {
            segundos += -1
            basic.pause(1000)
            basic.showString("" + (segundos.toString()))
        }
        music.playTone(523, music.beat(BeatFraction.Breve))
    }
})
input.onButtonPressed(Button.B, function () {
    segundos += 1
    basic.showString("" + (segundos.toString()))
})
let segundos = 0
