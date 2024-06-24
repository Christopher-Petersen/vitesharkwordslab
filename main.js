import './style.css';
import getRandomWord from './src/randomWord.js';
import{setSharkImage} from './src/sharkImage.js';
import{setupWord, isLetterInWord, revealLetterInWord} from './src/word.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord()
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector('#word-container'), word);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  revealLetterInWord(word[0])
};

initSharkwords();
