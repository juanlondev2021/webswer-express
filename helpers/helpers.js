const hbs = require('hbs');

//helpers
hbs.registerHelper('helper_name', function(options) { return 'helper value'; });
hbs.registerHelper('getAnio', function() {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', function(text) {

    let palabras = text.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});