function countOccurrences(text, word) {
    const words = text.split(' ');

    let count = 0;

    for (const w of words) {
        const cleanedWord = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        
        if (cleanedWord.toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }

    console.log(count);
}

