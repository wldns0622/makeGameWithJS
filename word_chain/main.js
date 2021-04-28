'use strict'

// [수도 코드]
// 1. 첫 제시어를 저장
// 2. 단어 입력(대답)
// 3. 제시어의 끝 글자와 입력된 단어의 첫 글자와 같은가?
// -> 같다면 제시어를 현재 입력된 글자를 저장 후 다시 입력으로 돌아가기
// -> 다르다면 문구를 출력한 뒤 다시 단어를 입력하게 함
// 4. 'q'버튼으로 게임 종료

let word = '사다리';
while (true) {
  let inputWord = prompt(`제시어는 ${word}입니다. 다음 단어를 입력하시오.`);
  if (word[word.length - 1] === inputWord[0]) {
    word = inputWord;
  } else {
    if (inputWord === 'q') { break; }
    alert('잘못 입력하였어요!');
  }
}