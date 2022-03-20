function loadProgram(){
    console.log("loading program")

    var div1 = document.getElementById("div1")

    var movie1 = document.createElement("p")
    var text = document.createTextNode("Movie 1")

    movie1.appendChild(text)

    div1.appendChild(movie1)

}