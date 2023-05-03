let aquarium = document.getElementById("aquarium")


let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(0, 0, 0)

turtle.setPosition(50, 100)

turtle.fill()

turtle.setFillStyle('brown')

turtle.setPosition(150, 150)
turtle.setSpeed(0.9)
turtle.beginPath()

turtle.forward(90)
turtle.right(90)
turtle.forward(60)
turtle.right(90)
turtle.forward(90)
turtle.right(90)
turtle.forward(60)
turtle.fill()
turtle.closePath()

turtle.right(90)
turtle.forward(90)
turtle.right(45)
turtle.forward(40)
turtle.right(85)
turtle.forward(43)
turtle.right(50)

turtle.setFillStyle()
turtle.setPosition(250, 20)
turtle.arc(10, 360)
turtle.setStrokeColorRGB(255, 255, 255)
turtle.fill()
