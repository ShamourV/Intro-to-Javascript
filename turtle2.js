let aquarium = document.getElementById("aquarium")


let turtle = new RealTurtle.default(aquarium, {autoStart: true})

function polygon(sides, size = 20) {
    for (let i = 0; i < sides; i++) {
    turtle.forward(20)
    turtle.right(360 / sides)
    
    polygon(10, 10)

    polygon(10, 20)
}
}
   
for (let i = 0; i < 5; i ++) {
    polygon((Math.random() * 10)+3)
}