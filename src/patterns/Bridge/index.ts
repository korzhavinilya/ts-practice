import Radio from './Radio';
import Remote from './Remote';
import TV from './TV';

const radio = new Radio();
const radioRemote = new Remote(radio);
radioRemote.togglePower();
radioRemote.volumeUp();
console.log('radio', radio);

const tv = new TV();
const tvRemote = new Remote(tv);
tvRemote.togglePower();
tvRemote.volumeUp();
tvRemote.volumeUp();
tvRemote.togglePower();
console.log('tv', tv);
