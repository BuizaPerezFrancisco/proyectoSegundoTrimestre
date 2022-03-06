/*
Mi primo con usuario Rexil quiere verse una serie que sea posterior
al 2015, y además, como no le gusta tener que esperar a que salgan nuevas
temporadas, quiere verse una serie que este terminada. La serie debe
ser apta para el y debe estar permitida en su país. Nos interesa saber el 
nombre de la serie y lo que le va a costar con el IVA incluido
*/
db.usuarios.aggregate([
    {
        $match: {
            nombreUsuario: "Rexil"
        }
    },
    {
        $lookup: {
            from: "paises",
            localField: "pais",
            foreignField: "pais",
            as: "paises"
        }
    },
    {
        $addFields:
        {
            paises: { $arrayElemAt: ["$paises", 0] }
        }
    },
    {
        $lookup: {
            from: "series",
            localField: "paises.seriesPermitidas",
            foreignField: "nombre",
            as: "series"
        }
    },
    {
        $unwind: "$series"
    },
    {
        $match: {
            "series.salidas.terminada": true,
            "series.salidas.fechasTemporadas": { $not: { $elemMatch: { $lt: new Date("2015-01-01") } } }
        }
    },
    {
        $project: {
            _id: 0,
            usuario: "$nombreUsuario",
            edadUsuario: "$edad",
            clasificacionEdadSerie: "$series.clasificacionEdad",
            pais: "$pais",
            tituloSerie: "$series.titulo",
            precioConIva: { $round: [{ $sum: [{ $multiply: ["$series.precioEuros", "$paises.iva"] }, "$series.precioEuros"] }, 2] },
            fechasSeries: "$series.salidas.fechasTemporadas"
        }
    },
    {
        $match: {
            $expr: { $lte: ["$clasificacionEdadSerie", "$edadUsuario"] }
        }
    }

]).pretty()

/*
Queremos saber el precio de todas las peliculas de accion permitidas 
para cada pais, con IVA y sin IVA
*/
db.paises.aggregate([{
    $lookup: {
        from: "peliculas",
        localField: "peliculasPermitidas",
        foreignField: "titulo",
        as: "peliculas"
    }
},
{
    $unwind:
        "$peliculas"
},
{
    $lookup: {
        from: "categorias",
        localField: "peliculas.id_categoria",
        foreignField: "id_categoria",
        as: "categoria"
    }
},
{
    $match: {
        categoria: {
            $elemMatch: {
                nombre_categoria: "accion"
            }
        }
    }
},
{
    $project: {
        _id: 0,
        pais: "$pais",
        titulo: "$peliculas.titulo",
        categorias: "$categoria.nombre_categoria",
        precioSinIva: "$peliculas.precioEuros",
        precioConIva: { $round: [{ $sum: [{ $multiply: ["$peliculas.precioEuros", "$iva"] }, "$peliculas.precioEuros"] }, 2] }
    }
}
])

/*
Mi hermana con usuario IreneBuiza quiere verse todas las peliculas de animacion
que haya en la biblioteca que sean aptas para ella. Quiero saber cuanto dura cada
pelicula, además de cuanto me costarian con el IVA incluido.
*/
db.usuarios.aggregate([
    {
        $match: {
            nombreUsuario: "IreneBuiza"
        }
    },
    {
        $lookup: {
            from: "paises",
            localField: "pais",
            foreignField: "pais",
            as: "paises"
        }
    },
    {
        $addFields:
        {
            paises: { $arrayElemAt: ["$paises", 0] }
        }
    },
    {
        $lookup: {
            from: "peliculas",
            localField: "paises.peliculasPermitidas",
            foreignField: "titulo",
            as: "peliculas"
        }
    },
    {
        $unwind: "$peliculas"
    },
    {
        $lookup: {
            from: "categorias",
            localField: "peliculas.id_categoria",
            foreignField: "id_categoria",
            as: "categorias"
        }
    },
    {
        $match: {
            categorias: {
                $elemMatch: {
                    nombre_categoria: "animacion"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            pais: "$pais",
            titulo: "$peliculas.titulo",
            categorias: "$categoria.nombre_categoria",
            precioSinIva: "$peliculas.precioEuros",
            precioConIva: { $round: [{ $sum: [{ $multiply: ["$peliculas.precioEuros", "$paises.iva"] }, "$peliculas.precioEuros"] }, 2] },
            edadUsuario: "$edad",
            clasificacionEdadPelicula: "$peliculas.clasificacionEdad",
            duracionPeliculaMinutos: "$peliculas.duracionMinutos"
        }
    },
    {
        $match: {
            $expr: { $lte: ["$clasificacionEdadPelicula", "$edadUsuario"] }
        }
    }

]).pretty()


/*
Queremos saber el tiempo en horas que necesitariamos para ver todas las peliculas
de una categoria, ordenadas de mayor a menor y contando solo las peliculas que tengan
como mucho 11 años.
*/


db.peliculas.aggregate([
    {
        $set: {
            anosAntiguedad:
            {
                $round: [
                    {
                        $divide: [{ $subtract: [new Date(), "$fechaSalida"] }, 31104000000]
                    }, 2
                ]
            }
        }
    },
    {
        $match: {
            anosAntiguedad: { $lte: 11 }
        }
    },
    {
        $lookup: {
            from: "categorias",
            localField: "id_categoria",
            foreignField: "id_categoria",
            as: "categorias"
        }
    },
    {
        $unwind: "$categorias"
    },
    {
        $group: {
            _id: "$categorias.nombre_categoria",
            duracionTotalCategoria: { $sum: "$duracionMinutos" },
            totalPeliculas: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: "$_id",
            duracionHorasCategoria: { $round: [{ $divide: ["$duracionTotalCategoria", 60] }, 2] },
            totalPeliculas: "$totalPeliculas"
        }
    },
    {
        $sort:
        {
            duracionHorasCategoria: -1
        }

    }
])