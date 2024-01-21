function censorWord(text, word) {
    const regex = new RegExp(word, 'gi');
    
    const censoredText = text.replace(regex, match => '*'.repeat(match.length));
    
    return censoredText;
}

const inputText1 = 'A small sentence with some words';
const censored1 = censorWord(inputText1, 'small');
console.log(censored1); 

const inputText2 = 'Find the hidden word';
const censored2 = censorWord(inputText2, 'hidden');
console.log(censored2);
