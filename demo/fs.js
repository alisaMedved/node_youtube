
const fs = require('fs');
const path = require('path');

// а вот это уже старый знакомый File System

// в node js только один поток поэтому лучше использовать асинхронные методы чем синхронные
// более полно используем event loop

// у всх асинхроных методов в node js первый аргумент колбека является error


// метод создания новой папки
// а если повторно вызвал - выкинет ошибку и не будет пересоздавать или перезатирать папку
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         // throw err;
//         console.log(err);
//     }
//     console.log('Папка создана')
// });


const filePath = path.join(__dirname, 'test', 'text.txt');

// метод создания файла + строчку в конец файла пр писать можно - ну получается в начало он же чистый
// Осторожно! Повторный вызов fs.writeFile перезатирает файлы и создает новые!

fs.writeFile(filePath, 'Hello NodeJS!', err => {
  if (err) {
    throw err
  }

  console.log('Файл создан');

  // приписать к файлу последнею строчку
  fs.appendFile(filePath, '\nHello Again!', err => {
    if (err) {
      throw err
    }

    console.log('Файл создан');
  })
});

// прочитать функцию
fs.readFile(filePath, (err, content) => {
  if (err) {
    throw  err
  }

  // выдает контент в буферах
  console.log(content)

  // преобразование
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
})

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw  err
  }

  // выдает контент в кодировке utf8
  console.log(content)
})
