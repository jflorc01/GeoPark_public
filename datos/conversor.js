const fs = require('fs');

function csvToJson(csvFilePath, jsonFilePath) {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const lines = csvData.split('\n').filter(line => line.trim() !== ''); // Filtrar líneas vacías
    const headers = lines[0].split(';');

    const jsonArray = lines.slice(1).map(line => {
        const values = line.split(';');
        return headers.reduce((obj, header, index) => {
            // Reemplazar ',' por '.' para los números
            obj[header.trim()] = values[index] ? values[index].trim().replace(',', '.') : null;
            return obj;
        }, {});
    });

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArray, null, 2), 'utf8');
    console.log(`Archivo JSON generado: ${jsonFilePath}`);
}

csvToJson('ies_san_andres_indicadores.csv', 'archivo.json');

