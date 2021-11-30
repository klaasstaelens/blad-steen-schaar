let wapen = 0
input.onGesture(Gesture.Shake, function () {
    wapen = randint(0, 2)
    if (wapen == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.showString("BLAD")
    } else {
        if (wapen == 1) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.pause(100)
            basic.showString("STEEN")
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.pause(100)
            basic.showString("SCHAAR")
        }
    }
})
basic.forever(function () {
	
})
