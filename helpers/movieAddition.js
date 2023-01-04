const { Movie } = require('../models/movieModel')

const movieAddition = (nombre, poster, precio) => {
    const newMovieHelper = new Movie({
        nombre: nombre,
        img: poster,
        precio: precio,
        horarios: [
            {
                hora: '13:00',
                asientos: [
                    {
                        nm: '00',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '01',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '02',
                        reservado: false,
                        valor: 100
                    },
                    {
                        nm: '03',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '04',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '05',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '06',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '07',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '08',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '09',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '10',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '11',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '12',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '13',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '14',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '15',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '16',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '17',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '18',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '19',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '20',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '21',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '22',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '23',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '24',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '25',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '26',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '27',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '28',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '29',
                        reservado: false,
                        valor: 100,
                    },{
                        nm: '30',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '31',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '32',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '33',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '34',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '35',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '36',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '37',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '38',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '39',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '40',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '41',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '42',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '43',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '44',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '45',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '46',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '47',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '48',
                        reservado: false,
                        valor: 100,
                    },
                    {
                        nm: '49',
                        reservado: false,
                        valor: 100,
                    },
                ]
            }
        ]
    })

    return newMovieHelper
}


module.exports = {movieAddition}