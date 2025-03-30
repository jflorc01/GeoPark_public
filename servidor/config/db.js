const mongoose = require('mongoose');
MONGODB_URI="mongodb://localhost:27018/GeoPark"

const connectDB = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("[OK] Conectado a MongoDB");
    }catch(err){
        console.error(`[!] Error de conexión a MongoDB: ${err}`)
        process.exit(1);
    }
};

module.exports = connectDB;