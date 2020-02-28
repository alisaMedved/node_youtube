
const path = require('path');

// знакомьтесь встроенная в node js библиотека path

console.log('Название файла: ', path.basename(__filename));

console.log('Имя директории: ', path.dirname(__filename));

console.log('Расширение файла: ', path.extname(__filename));

// объект файл где лежит как зовут
console.log('Parse: ', path.parse(__filename).name);

// объединяет раздельные слова в путь к файлу даже не к существующему
console.log(path.join(__dirname, 'server', 'index.html'));
