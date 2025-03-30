const mongoose = require('mongoose');

const indicadoresEsq  = new mongoose.Schema({
    TDO: {type: String, required: true},
    sector: {type: Number, required: true},
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
}, {
    collection: 'Indicadores',
});

module.exports = mongoose.model('datosIndicadores', indicadoresEsq)