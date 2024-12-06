import fs from 'fs';
import path from 'path';

// Ruta al archivo JSON
const filePath = path.join(__dirname, 'pqrs.json');

// Función para leer el archivo JSON
export const readFromFile = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error leyendo el archivo:', error);
        return [];
    }
};

// Función para escribir en el archivo JSON
export const writeToFile = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error escribiendo en el archivo:', error);
    }
};