const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', data => {
  console.log('ON: anything', data)
});

emitter.emit('anything', {a: 1});
emitter.emit('anything', {b: 2});

setTimeout(() => {
  emitter.emit('anything', {c: 3})
}, 1500);

// EventEmitter - это класс в node js, а конкретно
// из встроенной библиотеки node js по имени 'events'

// emitter - это объект генерирующий определенные именнованные события
// emitter - это экземпляр класса EventEmitter

// Динамические методы класса EventEmitter
// on - навешивает обработчик события
// emit - вызывает событие


// dispatch в redux ничто иное как обертка над EventEmitter.emit
// action.type - это имя события
// action.data - это данные передаваемые обработчику события
// функции observe

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]');
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]');
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher();

dis.subscribe('aa', data => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22});



