const alphabet = 'abcdefghijklmnopqrstuvwxyz'; 

//create a function to set up guesses with perameters
function setupGuesses(element, handleGuess) {
  //split alphabet into individual letters
  alphabet.split('').forEach((letter) => {
    //for each letter, there is a button element
    const btn = document.createElement('button');
    //set its innerText so it displays a letter
    btn.innerText = letter;
    //attach the event handler to the click event
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    //inserts an object(letter) after the last child of the element
    element.append(btn);
  });
}

export default setupGuesses;
