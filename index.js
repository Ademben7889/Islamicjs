const fs = require('fs');

function getAzkar() {
    const azkarData = JSON.parse(fs.readFileSync('database/azkarDB.json', 'utf8'));
    const randomIndex = Math.floor(Math.random() * azkarData.length);
    const randomAzkar = azkarData[randomIndex];
    return randomAzkar;
}

function getAhadith() {
    const ahadithData = JSON.parse(fs.readFileSync('database/ahaditDB.json', 'utf8'));
    const randomIndex = Math.floor(Math.random() * ahadithData.hadiths.length);
    const randomHadith = ahadithData.hadiths[randomIndex];
    return randomHadith;
}

module.exports = { getAzkar, getAhadith };
