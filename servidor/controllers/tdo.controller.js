const datosIndicadores = require('../models/indicadores.model');

exports.getTDO = async (req, res) => {
    try{

        const {sector, day, month, year, hour, minute } = req.query;

        if (!sector || !day || !month || !year || !hour || !minute) {
            return res.status(400).json({ 
                error: 'Parámetros incompletos',
                mensaje: 'Se tienen que incluir: sector, day, mont, year, hour y minute'
            });
        }

        const sectorNum = parseInt(sector);
        const dayNum = parseInt(day);
        const monthNum = parseInt(month);
        const yearNum = parseInt(year);
        const hourNum = parseInt(hour);
        const minuteNum = parseInt(minute);

        const data = await datosIndicadores.findOne({
            sector: sectorNum,
            hour: hourNum,
            minute: minuteNum,
            day: dayNum,
            month: monthNum,
            year: yearNum
        }).select('TDO');

        if(!data){
            return res.status(404).json({
                error: 'No encontrado',
                mensaje: 'No se encontraron datos para el sector indicado en la fecha indicada'
            });
        }

        res.json({ocupacion: data.TDO});

    }catch(err){
        console.error(`[!] ERROR: ${err}`)
        res.status(500).json({ error: 'Error del servidor', mensaje: err.message});
    }
}