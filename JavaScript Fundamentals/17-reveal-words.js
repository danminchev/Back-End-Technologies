function revealWords(words, template) {
    'use strict';

    const wordArray = words.split(', ');
    const templateArray = template.split(' ');
  
    for (let i = 0; i < templateArray.length; i++) {
      const currentTemplate = templateArray[i];
  
      if (currentTemplate.includes('*')) {
        const wordLength = currentTemplate.length;
        const matchingWord = wordArray.find(word => word.length === wordLength);
  
        templateArray[i] = matchingWord || currentTemplate;
      }
    }
  
    return templateArray.join(' ');
  }
  

  const result1 = revealWords('great', 'softuni is ***** place for learning new programming languages');
  console.log(result1);
  
  const result2 = revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
  console.log(result2);
  