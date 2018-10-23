function anagrams(word, words) {
  let anaArr = [];
  
  words.forEach((theWord) => {
  
  if (word.split('').sort().join('') === theWord.split('').sort().join('')) {
  
  anaArr.push(theWord)
  
  }})
  return anaArr
  
  }