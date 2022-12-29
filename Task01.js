'use strict';

for (let a = 2; a < 11; a++) {
  let x = a;
  for (let b = 2; b < 11; b++) {
    x *= a;
    console.log(`${a} в степени ${b} = ${x}`);
  }
  console.log(`===================================`);
}
