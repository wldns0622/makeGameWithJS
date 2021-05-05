// 브라우저에 3x3 테이블 만들기위한 태그
let table = document.createElement('table');
// 자바스크립트에서 3x3의 데이터자료를 구현하기위한 2차원 배열
let 칸들 = [];
let 줄들 = [];
let 턴 = 'X';

//[event handle]
let callback = function (event) {
  // 칸을 클릭했을 때 이미 채워져 있는가?
  let 몇줄 = 줄들.indexOf(event.target.parentNode);
  let 몇칸 = 칸들[몇줄].indexOf(event.target);

  if (칸들[몇줄][몇칸].textContent !== '') {

  } else {
    칸들[몇줄][몇칸].textContent = 턴;
    턴 = (턴 === 'X') ? 'O' : 'X';
  }

  // 세칸 확인
  let 다참 = false;
  if (칸들[몇줄][0].textContent === 턴 && 칸들[몇줄][1].textContent === 턴 && 칸들[몇줄][1].textContent === 턴) {
    다참 = true;
  }
  if (칸들[0][몇칸].textContent === 턴 && 칸들[1][몇칸].textContent === 턴 && 칸들[2][몇칸].textContent === 턴) {
    다참 = true;
  }
  if (몇줄 === 몇칸) {
    if (칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
      다참 = true;
    }
  }

  if (다참) {
    console.log(턴 + '님이 승리!');
  }
};

// init => table, tr, td를 만들어 화면에 표시하고, 2차원배열에 tr추가하기
(() => {
  for (let i = 0; i < 3; i++) {
    let row = document.createElement('tr');
    줄들.push(row);
    let rowArray = [];
    for (let j = 0; j < 3; j++) {
      let coloum = document.createElement('td');
      coloum.addEventListener('click', callback);
      rowArray.push(coloum);
      row.append(coloum);
    }
    칸들.push(rowArray);
    table.append(row);
  }

  document.body.append(table);
})();

console.log(칸들);