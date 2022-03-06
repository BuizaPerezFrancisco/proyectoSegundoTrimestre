db.peliculas.drop()
db.peliculas.insertMany([
    {
        _id: 1,
        titulo: "Battleship",
        clasificacionEdad: 16,
        id_categoria: [01, 02, 05, 19],
        fechaSalida: new Date("2012-04-11"),
        duracionMinutos: 131,
        precioEuros: 3
    },
    {
        _id: 2,
        titulo: "Ice Age",
        clasificacionEdad: 5,
        id_categoria: [03, 06],
        fechaSalida: new Date("2002-01-28"),
        duracionMinutos: 81,
        precioEuros: 2
    },
    {
        _id: 3,
        titulo: "Toy Story",
        clasificacionEdad: 3,
        id_categoria: [03, 02],
        fechaSalida: new Date("1996-03-14"),
        duracionMinutos: 81,
        precioEuros: 4
    },
    {
        _id: 4,
        titulo: "Cars",
        clasificacionEdad: 3,
        id_categoria: [03, 07],
        fechaSalida: new Date("2006-07-06"),
        duracionMinutos: 116,
        precioEuros: 3
    },
    {
        _id: 5,
        titulo: "Venganza",
        clasificacionEdad: 18,
        id_categoria: [01, 12],
        fechaSalida: new Date("2008-08-08"),
        duracionMinutos: 93,
        precioEuros: 5
    },
    {
        _id: 6,
        titulo: "Ready Player One",
        clasificacionEdad: 13,
        id_categoria: [01, 10, 02],
        fechaSalida: new Date("2018-03-29"),
        duracionMinutos: 140,
        precioEuros: 3
    },
    {
        _id: 7,
        titulo: "Deadpool",
        clasificacionEdad: 18,
        id_categoria: [01, 04, 11],
        fechaSalida: new Date("2016-02-19"),
        duracionMinutos: 109,
        precioEuros: 5
    },
    {
        _id: 8,
        titulo: "El Dictador",
        clasificacionEdad: 16,
        id_categoria: [04, 16],
        fechaSalida: new Date("2012-01-01"),
        duracionMinutos: 83,
        precioEuros: 2 
    },
    {
        _id: 9,
        titulo: "Iron Man",
        clasificacionEdad: 7,
        id_categoria: [01, 02, 11],
        fechaSalida: new Date("2008-05-02"),
        duracionMinutos: 126,
        precioEuros: 4 
    },
    {
        _id: 10,
        titulo: "Shrek",
        clasificacionEdad: 7,
        id_categoria: [10, 02, 04, 03],
        fechaSalida: new Date("2001-07-13"),
        duracionMinutos: 92,
        precioEuros: 5 
    },
    {
        _id: 11,
        titulo: "Shin Shan: Perdidos en la Jungla",
        clasificacionEdad: 2,
        id_categoria: [03, 10, 18],
        fechaSalida: new Date("2001-01-11"),
        duracionMinutos: 100,
        precioEuros: 1 
    },
    {
        _id: 12,
        titulo: "Mortal Kombat",
        clasificacionEdad: 18,
        id_categoria: [01, 14],
        fechaSalida: new Date("2021-04-08"),
        duracionMinutos: 110,
        precioEuros: 2 
    },
    {
        _id: 13,
        titulo: "Chicken Little",
        clasificacionEdad: 4,
        id_categoria: [03, 02, 19],
        fechaSalida: new Date("2005-11-18"),
        duracionMinutos: 81,
        precioEuros: 2 
    },
    {
        _id: 14,
        titulo: "Harry Potter y la piedra filosofal",
        clasificacionEdad: 7,
        id_categoria: [13, 02, 10],
        fechaSalida: new Date("2001-11-04"),
        duracionMinutos: 152,
        precioEuros: 3 
    },
    {
        _id: 15,
        titulo: "Interstellar",
        clasificacionEdad: 13,
        id_categoria: [01, 20, 15],
        fechaSalida: new Date("2014-10-26"),
        duracionMinutos: 169,
        precioEuros: 4 
    },
])


//------------------------------------------------------------------------------------------------------------------------------------------------------
db.series.drop()
db.series.insertMany([
    {
        _id: 1,
        nombre: "La Casa de Papel",
        clasificacionEdad: 12,
        
        id_categoria: [01, 17],
        salidas: {fechasTemporadas: [new Date("2017-05-02"), new Date("2018-05-01"), new Date("2019-07-04")], terminada: true},
        temporadas: 3,
        precioEuros: 10
    },
    {
        _id: 2,
        nombre: "Los 100",
        clasificacionEdad: 16,
        id_categoria: [01, 15, 20],
        salidas: {fechasTemporadas: [new Date("2015-08-08"), new Date("2016-01-01"), new Date("2017-03-01"), new Date("2018-03-29"), new Date("2019-07-04")], terminada: false},
        temporadas: 5,
        precioEuros: 6
    },
    {
        _id: 3,
        nombre: "Breaking Bad",
        clasificacionEdad: 16,
        id_categoria: [01, 12],
        salidas: {fechasTemporadas: [new Date("2015-05-02"), new Date("2016-05-01"), new Date("2018-07-04"), new Date("2019-07-04")], terminada: true},
        temporadas: 4,
        precioEuros: 10
    },
    {
        _id: 4,
        nombre: "Juego de Tronos",
        clasificacionEdad: 18,
        id_categoria: [01, 02],
        salidas: {fechasTemporadas: [new Date("2014-01-02"), new Date("2015-02-03"), new Date("2016-04-04"), new Date("2018-05-06"), new Date("2019-07-26")], terminada: true},
        temporadas: 5,
        precioEuros: 5
    },
    {
        _id: 5,
        nombre: "Las Winx",
        clasificacionEdad: 3,
        id_categoria: [03, 13],
        salidas: {fechasTemporadas: [new Date("2004-02-28"), new Date("2005-02-14")], terminada: true},
        temporadas: 2,
        precioEuros: 3
    },
    {
        _id: 6,
        nombre: "Death Note",
        clasificacionEdad: 12,
        id_categoria: [02, 03],
        salidas: {fechasTemporadas: [new Date("2015-06-07"), new Date("2016-08-08")], terminada: true},
        temporadas: 2,
        precioEuros: 4
    },
    {
        _id: 7,
        nombre: "Prison Break",
        clasificacionEdad: 18,
        id_categoria: [01],
        salidas: {fechasTemporadas: [new Date("2016-04-02"), new Date("2017-07-05"), new Date("2018-09-18")], terminada: false},
        temporadas: 3,
        precioEuros: 4
    },
    {
        _id: 8,
        nombre: "Narcos",
        clasificacionEdad: 18,
        id_categoria: [01, 12],
        salidas: {fechasTemporadas: [new Date("2018-05-17"), new Date("2019-12-04")], terminada: false},
        temporadas: 2,
        precioEuros: 7
    },
    {
        _id: 9,
        nombre: "La que se avecina",
        clasificacionEdad: 16,
        id_categoria: [04],
        salidas: {fechasTemporadas: [new Date("2017-05-12"), new Date("2018-05-21"), new Date("2019-07-14"), new Date("2021-09-12")], terminada: false},
        temporadas: 4,
        precioEuros: 1
    },
    {
        _id: 10,
        nombre: "El Juego del Calamar",
        clasificacionEdad: 16,
        id_categoria: [02, 08, 09],
        salidas: {fechasTemporadas: [new Date("2021-08-12")], terminada: false},
        temporadas: 1,
        precioEuros: 8
    },
])


//------------------------------------------------------------------------------------------------------------------------------------------------------
db.paises.drop()
db.paises.insertMany([
    {
        _id: 1,
        pais: "espana",
        iva: 0.21,
        seriesPermitidas: ["La Casa de Papel", "Los 100", "Breaking Bad", "Juego de Tronos", "Las Winx", "Death Note", 
                           "Prison Break", "Narcos", "La que se avecina", "El Juego del Calamar"],
        peliculasPermitidas: ["Battleship", "Ice Age", "Toy Story", "Cars", "Venganza", "Ready Player One", "Deadpool", "El Dictador", "Iron Man", 
                              "Shrek", "Shin Shan: Perdidos en la Jungla", "Mortal Kombat", "Chicken Little", "Harry Potter y la piedra filosofal", "Interstellar"]
    },
    {
        _id: 2,
        pais: "italia",
        iva: 0.18,
        seriesPermitidas: ["La Casa de Papel", "Los 100", "Las Winx", "Prison Break", "El Juego del Calamar"],
        peliculasPermitidas: ["Battleship", "Ice Age", "Toy Story", "Cars", "Ready Player One", "Deadpool", "Iron Man", 
                              "Shrek", "Shin Shan: Perdidos en la Jungla", "Chicken Little", "Harry Potter y la piedra filosofal", "Interstellar"]
    },
    {
        _id: 3,
        pais: "alemania",
        iva: 0.15,
        seriesPermitidas: ["Los 100", "Breaking Bad", "Juego de Tronos", "Las Winx", "Death Note", "Prison Break", "Narcos", "El Juego del Calamar"],
        peliculasPermitidas: ["Battleship", "Cars", "Venganza", "Ready Player One", "Deadpool", "El Dictador", 
                              "Shrek", "Mortal Kombat", "Chicken Little",]
    },
    {
        _id: 4,
        pais: "inglaterra",
        iva: 0.24,
        seriesPermitidas: ["La Casa de Papel", "Breaking Bad", "Juego de Tronos", "Las Winx", "Death Note", 
                              "Prison Break", "El Juego del Calamar"],
        peliculasPermitidas: ["Battleship", "Ice Age", "Toy Story", "Cars", "Venganza", "Ready Player One", "Deadpool", "Iron Man", 
                              "Harry Potter y la piedra filosofal", "Interstellar"]
    },
])

//------------------------------------------------------------------------------------------------------------------------------------------------------
db.categorias.drop()
db.categorias.insertMany([
    {
        id_categoria: 01,
        nombre_categoria: "accion"
    },
    { id_categoria: 02, nombre_categoria: "ficcion" },
    { id_categoria: 03, nombre_categoria: "animacion" },
    { id_categoria: 04, nombre_categoria: "comedia" },
    { id_categoria: 05, nombre_categoria: "guerra" },
    { id_categoria: 06, nombre_categoria: "animales" },
    { id_categoria: 07, nombre_categoria: "carreras" },
    { id_categoria: 08, nombre_categoria: "juegos" },
    { id_categoria: 09, nombre_categoria: "gore" },
    { id_categoria: 10, nombre_categoria: "aventura" },
    { id_categoria: 11, nombre_categoria: "superheroes" },
    { id_categoria: 12, nombre_categoria: "drogas" },
    { id_categoria: 13, nombre_categoria: "magia" },
    { id_categoria: 14, nombre_categoria: "lucha" },
    { id_categoria: 15, nombre_categoria: "distopia" },
    { id_categoria: 16, nombre_categoria: "politica" },
    { id_categoria: 17, nombre_categoria: "romance" },
    { id_categoria: 18, nombre_categoria: "guerra" },
])



//------------------------------------------------------------------------------------------------------------------------------------------------------
db.usuarios.drop()
db.usuarios.insertMany([
    {
        _id: 1,
        nombreUsuario: "franBuiPer",
        suscripciones: ["series", "peliculas"],
        edad: 18,
        pais: "espana",
    },
    {
        _id: 2,
        nombreUsuario: "raulBuiRom",
        suscripciones: ["peliculas"],
        edad: 22,
        pais: "espana",
    },
    {
        _id: 3,
        nombreUsuario: "crispiChicken",
        suscripciones: ["peliculas"],
        edad: 10,
        pais: "espana",
    },
    {
        _id: 4,
        nombreUsuario: "ivanProsciuto",
        suscripciones: ["series", "peliculas"],
        edad: 27,
        pais: "italia",
    },
    {
        _id: 5,
        nombreUsuario: "Pepperoni",
        suscripciones: ["series"],
        edad: 35,
        pais: "italia",
    },
    {
        _id: 6,
        nombreUsuario: "Rexil",
        suscripciones: ["series", "peliculas"],
        edad: 16,
        pais: "alemania",
    },
    {
        _id: 7,
        nombreUsuario: "Jonny",
        suscripciones: ["series", "peliculas"],
        edad: 13,
        pais: "alemania",
    },
    {
        _id: 8,
        nombreUsuario: "IreneBuiza",
        suscripciones: ["series", "peliculas"],
        edad: 4,
        pais: "espana",
    },
    {
        _id: 9,
        nombreUsuario: "MarioBros",
        suscripciones: ["peliculas"],
        edad: 17,
        pais: "inglaterra",
    },
    {
        _id: 10,
        nombreUsuario: "LuigiBarcelo",
        suscripciones: ["series"],
        edad: 19,
        pais: "inglaterra",
    },

])