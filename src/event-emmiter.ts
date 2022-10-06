import EventEmitter from 'events';

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('subscribing');
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log('dispatching');
    this.emit(eventName, data);
  }
}

const dispatch = new Dispatcher();

dispatch.subscribe('test', (data) => {
  console.log('on test', data);
});

dispatch.dispatch('test', { b: 1 });
