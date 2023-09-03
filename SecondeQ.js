function longestWord(words) {
    return words.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
  }
  