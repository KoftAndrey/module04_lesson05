'use strict';

const isPrime = (number) => {
  if (number <= 1) return false;

  for(let i = 2, root = Math.sqrt(number); i <= root; i++) {
    if(number % i === 0) return false;
  }

  return true;
};

const number = prompt(`Ведите число.`);

isPrime(number) ? console.log(`Число ${number} является простым.`) : console.log(`Число ${number} не является простым.`);
