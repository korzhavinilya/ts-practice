import { Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => {
    console.log(`Observer got a value of ${value}`);
  },
  error: (error) => {
    console.error(`Observer got an error ${error}`);
  },
  complete: () => {
    console.log('Observer got a complete notification');
  },
};

export default observer;
