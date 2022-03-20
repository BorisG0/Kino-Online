function loadProgram(){
    console.log("loading program")

    var div1 = document.getElementById("div1")

    var movie1 = document.createElement("p")

    var text = document.createTextNode("Movie 1")

    var link = document.createElement("a")
    link.href = "https://www.cineplex.de/film/the-batman/371837/mannheim/"

    var image = document.createElement("img")
    image.src = "batman.jpg"
    image.style = "width: 20%;"
    image.href = "www.google.com"


    movie1.appendChild(text)

    link.appendChild(image)
    movie1.appendChild(link)
    div1.appendChild(movie1)

}