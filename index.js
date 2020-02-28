const text = require('./data');

// webpack - это такая технология которая позволяет собрать всю инфруструктуру файов в единое приложение
//
// node js - это JS runtime построеный на движке V8
//
// runtime -это по сути определенный процесс в оперативной памяти - если он запущен то он откликается на команды - не запущен не откликается
//
//
// +++++
//
//     серверного js
//
// +++++
//
//     node в консоли переводит нас в среду node js
//     .exit - выйти ииз этой среды в терминал


// const chalk = require('chalk');
// console.log(chalk.blue('Hello nodeJs'));
// console.log(chalk.blue(text));


// а что делает node js с нашими файлами как он их видит - он каждый файл делает модулем и оборачивает его в функцию
// помнишь древний синтаксис IFFE вот это он

// (function(exports, require, module, __dirname, __filename) {
// // содержимое файла
// })

// __dirname - системная переменная
// console.log(__dirname);
// console.log(__filename);

// Итак мы можем загружать другие модули и работать с ними - привет папка node_modules
// мы можем создавать и свои модули
// и можем пользоваться встроеными в node js модулями


// как создавать собственные веб-сервера в node js? с помощью втроенной библиотеки http

const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw  err;
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         res.end(data);
    //     })
    // }
    // if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) {
    //             throw  err;
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         res.end(data);
    //     })
    // }
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    let contentType = 'text/html';

    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        default:
            contentType = 'text/html';
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.end(data);
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(content);
        }
    })
});

// системная переменная - какой порт
const PORT = process.env.PORT || 3000;

server.listen(3000, () => {
    console.log('Server has been started...');
});

// а чтобы каждый раз не перезапускать сервер у нас есть nodemon - он сам автоматически будет перезапускать


// мало кто использует нативную библиотеку http - все таки много кода писать
// есть фреимворки у node js которые деают все это автоматически
// это Express.js Koa.js


// если webpack.analizator запихнуть в скрипт запуска прод
// то в бибтакете пайплайна не будет - ибо
// в webpack.analizator setTimeout а с ним битбакет до сих пор киво работает
