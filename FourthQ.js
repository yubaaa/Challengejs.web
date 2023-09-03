function frequencyOfStrings(strings) {
    return strings.reduce((freq, str) => {
      freq[str] = (freq[str] || 0) + 1;
      return freq;
    }, {});
  }
  