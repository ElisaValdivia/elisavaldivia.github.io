var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Diseñadora UX/UI')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Una buena interfaz sorprende.')
    .pauseFor(2500)
    //numero de caracteres que se borraran
    .deleteChars(10)
    .typeString('<strong>mejora.</strong>')
    .pauseFor(2500)
    .start();