const fs = require('fs');

const apiKey = process.env.GOOGLE_KEY;
const htmlFilePath = 'src/map.html';

let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
htmlContent = htmlContent.replace('MYKEY', apiKey);

fs.writeFileSync(htmlFilePath, htmlContent);
