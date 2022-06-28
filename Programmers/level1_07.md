# 모의고사

[프로그래머스 1단계 - 모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840)

## 풀이

// 1. 1~3번 수포자가 오지선다 문제를 규칙적인 패턴으로 찍었을 때, n개의 문제의 답을 몇개나 맞출수 있는지 구한다.(count 배열)
// 2. 가장 많이 맞춘 사람의 번호를 return한다
// 3. 똑같이 맞춘 사람의 번호를 올림차순 정렬한다.

```javascript
function solution(answers) {
  var answer = [];
  const firstSupoja = [1, 2, 3, 4, 5];
  const firstSupojaLength = firstSupoja.length;
  const secondSupoja = [2, 1, 2, 3, 2, 4, 2, 5];
  const secondSupojaLength = secondSupoja.length;
  const thirdSupoja = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const thirdSupojaLength = thirdSupoja.length;

  const correctCount = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstSupoja[i % firstSupojaLength]) {
      correctCount[0] += 1;
    }
    if (answers[i] === secondSupoja[i % secondSupojaLength]) {
      correctCount[1] += 1;
    }
    if (answers[i] === thirdSupoja[i % thirdSupojaLength]) {
      correctCount[2] += 1;
    }
  }
  console.log(correctCount);
  const maxScore = Math.max(...correctCount);
  for (let i = 0; i < correctCount.length; i++) {
    if (correctCount[i] === maxScore) {
      answer.push(i + 1);
    }
  }
  return answer;
}
```

- i % 비교하는 패턴 배열의 길이
