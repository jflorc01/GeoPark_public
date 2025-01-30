const fs = require('fs');

const inputFilePath = 'archivo.json'; 
const outputFilePath = 'unDia.json'; 
const targetDate = '2024-12-18'; 

// Función para filtrar datos de un día específico
function filterDataByDate(data, date) {
    return data.filter(entry => entry.date.startsWith(date));
}

// Leer el archivo JSON
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Parsear el JSON
    let jsonData;
    try {
        jsonData = JSON.parse(data);
    } catch (parseError) {
        console.error('Error al parsear el JSON:', parseError);
        return;
    }

    // Filtrar los datos
    const filteredData = filterDataByDate(jsonData, targetDate);

    // Escribir el nuevo JSON en un archivo
    fs.writeFile(outputFilePath, JSON.stringify(filteredData, null, 2), (writeErr) => {
        if (writeErr) {
            console.error('Error al escribir el archivo filtrado:', writeErr);
        } else {
            console.log('Archivo filtrado creado:', outputFilePath);
        }
    });
});
