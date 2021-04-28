// [숫자야구]

/*
[수도코드]

---> loop
1. 랜덤한 4자리 숫자 생성 (숫자 중복 x)
2. 사용자에게 값을 입력받는다.
3. 답과 일치하는가?
  -> 해당 답과 시도 횟수를 출력한다. -> 중지
  -> strike와 ball을 판단하여 알려준다.
--->
 */
const ul = document.querySelector('ul');
const input = document.querySelector('.input input');

let tryCount = 0;
let result = reset();

function reset() {
  let temp = [];
  while (temp.length < 4) {
    let randNumber = String(Math.floor(Math.random() * 10));
    if (temp.indexOf(randNumber) === -1) {
      temp.push(randNumber);
    }
  }
  const li = document.createElement('li');
  li.textContent = '랜덤한 4자리 숫자가 생성됬습니다 !';
  li.classList.add('chance');
  ul.append(li);
  return temp;
}

console.log(result);

//[이벤트 핸들러] 입력한 값에 대한 결과 출력
function checkInputValue() {
  tryCount++;
  const inputValue = document.querySelector('.input input').value;
  const splitInput = inputValue.split('');
  let strike = 0;
  let ball = 0;
  splitInput.forEach((el, idx, arr) => {
    if (el === result[idx]) {
      strike++;
    }
    else if (result.indexOf(el) !== -1) {
      ball++;
    };
  })

  if (strike === 4) {
    success(splitInput);
    input.readOnly = true;
    input.classList.add('read-only')
  } else {
    fail(splitInput, strike, ball);
  }
  input.value = '';

}

//success
function success(splitInput) {
  const li = document.createElement('li');
  li.textContent = `(시도횟수: ${tryCount}) [입력값: ${splitInput.join('')}] 4Strike!! 축하합니다!`;
  li.classList.add('chance');
  ul.append(li);
}

//fail
function fail(splitInput, strike, ball) {
  const li = document.createElement('li');
  li.textContent = `(시도횟수: ${tryCount}) [입력값: ${splitInput.join('')}] => Strike: ${strike}, Ball: ${ball}`;
  li.classList.add('chance');
  ul.append(li);
}

const resetBtn = document.querySelector('.reset');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkInputValue();
  }
})
resetBtn.addEventListener('click', () => {
  ul.textContent = '';
  input.classList.remove('read-only');
  reset();
})