'use strict'


//[별 찍기]

// case1 -> 직각 삼각형1
let case1 = function (n) {
  let star = '*';
  console.log(`[case1] 입력된 수: ${n}`);
  for (let i = 1; i <= n; i++) {
    console.log(star);
    star += '*';
  }
}

case1(4);
console.log();

// case2 -> 직각 삼각형2
let case2 = function (n) {
  console.log(`[case2] 입력된 수: ${n}`);
  for (let i = 1; i <= n; i++) {
    let floor = '';
    for (let j = 1; j <= n; j++) {
      if (n - i < j) {
        floor += '*';
      } else {
        floor += ' ';
      }
    }
    console.log(floor);
  }
}

case2(6);
console.log();

// case3 -> 역 직각삼각형
let case3 = function (n) {
  console.log(`[case3] 입력된 수: ${n}`);
  for (let i = 5; i > 0; i--) {
    let result = '';
    for (let j = 1; j <= i; j++) {
      result += '*';
    }
    console.log(result);
  }

}

case3(5);
console.log();

// case4 -> 이등변 삼각형
let case4 = function (n) {
  console.log(`[case4] 입력된 수: ${n}`);
  for (let i = 1; i <= n; i++) {
    let floor = '';
    for (let j = 1; j < n; j++) {
      if (n - i < j) {
        floor += '**';
      } else {
        floor += ' ';
      }
    }
    floor += '*';
    console.log(floor);
  }
}

case4(5);
console.log();

// case5 -> 역 이등변 삼각형
let case5 = function (n) {
  console.log(`[case5] 입력된 수: ${n}`);
  for (let i = n; i > 0; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1));
  }
}

case5(7);