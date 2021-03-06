// 5. 이상한 문자만들기
// toWeirdCase함수는 문자열을 인수로 전달받는다.문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로,
// 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

//   주의) 문자열 전체의 짝 / 홀수 인덱스가 아니라 단어(공백을 기준)별로 짝 / 홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  const str = s.split(' ');
  let result = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      if (j % 2 === 0) result += str[i][j].toUpperCase();
      else result += str[i][j].toLowerCase();
    }
    result += ' ';
  }
  return result;
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
