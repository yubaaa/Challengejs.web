function averageOfEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) return 0;
  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
  return sum / evenNumbers.length;
}