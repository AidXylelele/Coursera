import { helloSpeaker } from './SpeakHello.js';
import { byeSpeaker } from './SpeakGoodBye.js';

const iife = (function () {
  const names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
  for (const name of names) {
    const element = name.toLocaleLowerCase();
    const firstLetter = element.split('')[0];
    if (firstLetter !== 'j') {
      helloSpeaker.speak(name);
    } else {
      byeSpeaker.speak(name);
    }
  }
}());
