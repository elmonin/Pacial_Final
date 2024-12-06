import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

const pqrFilePath = path.resolve('db', 'pqr.json');

const readPQRs = () => {
    try {
        return JSON.parse(readFileSync(pqrFilePath, 'utf8'));
    } catch (err) {
        return [];
    }
};

export const addPQR = (newPQR) => {
    try {
        const pqrList = readPQRs();
        newPQR.id = pqrList.length + 1;
        pqrList.push(newPQR);

        writeFileSync(pqrFilePath, JSON.stringify(pqrList, null, 2));
        return { success: true };
    } catch (error) {
        console.error('Error al guardar la PQR:', error);
        return { error };
    }
};