function isPath () {
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) > 0 && maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 7) {
        isPathVar = false
    } else {
        isPathVar = true
    }
    return isPathVar
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (isPath()) {
        basic.setLedColor(0x00ff00)
        maqueen.setColor(0x00ff00)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.setLedColor(0xff0000)
        maqueen.setColor(0xff0000)
        basic.showIcon(IconNames.No)
    }
})
let isPathVar = false
basic.showString("A")
basic.setLedColor(0x0000ff)
maqueen.setColor(0x0000ff)
