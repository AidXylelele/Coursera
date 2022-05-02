const byeSpeaker = (function () {
  const speakWord = 'Good Bye';
  return {
    speak: function speak(name) {
      console.log(`${speakWord} ${name}`);
    },
  };
}());

export { byeSpeaker };
