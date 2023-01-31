import { Viaje } from '../models/Viaje.js';

const paginaInicio = async (req, res) => { //req: lo que enviamos - res: lo que express nos responde

    // Consultar 3 viajes del modelo de viajes
    try {
        const viajes = await Viaje.findAll({limit : 3});

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes
        });
    } catch (error) {
        console.log(error);
    }


    
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar BD
    const viajes = await Viaje.findAll();
    // console.log(viajes);
    

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = (req, res) => { 
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => { 
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug }});
        
        res.render('viaje', {
            pagina: 'Informacion Viaje', 
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}



export {
    paginaInicio, 
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}