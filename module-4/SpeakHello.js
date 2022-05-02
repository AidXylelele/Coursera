const helloSpeaker = (function () {
  const speakWord = 'Hello';
  return {
    speak: function speak(name) {
      console.log(`${speakWord} ${name}`);
    },
  };
}());

export { helloSpeaker };
