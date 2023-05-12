let intensité_lumineuse = 0
let temperature = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    temperature = input.temperature()
    serial.writeLine("Temperature: " + temperature + "C")
    intensité_lumineuse = input.lightLevel()
    basic.pause(1000)
    serial.writeLine("intensité lumineuse à :" + intensité_lumineuse)
})
