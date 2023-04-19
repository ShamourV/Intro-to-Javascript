let aquarium = document.getElementById("aquarium")


let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(200, 200, 255)
turtle.setFillStyle('red')

turtle.setPosition(50, 100)

turtle.fill()

turtle.setFillStyle('red')

turtle.setPosition(150, 150)

turtle.beginPath()

turtle.forward(50)
turtle.right(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(50)
turtle.right(45)
turtle.forward(40)
turtle.right(100)
turtle.forward(40)
turtle.right(50)
turtle.forward(1)