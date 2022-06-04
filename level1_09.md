# 문자열 내림차순으로 배치하기

[프로그래머스 1단계 - 문자열 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12917)

## 풀이

- 1. 대문자, 소문자 배열 2개로 나눈다
- 2. 각 배열을 내림차순으로 정렬 (sort + reverse)
- 3. 소문자와 대문자를 합쳐서 문자열로 반환 (concat + join)

```javascript
function solution(s) {
  var answer = "";
  let largeLetters = [];
  let smallLetters = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      smallLetters.push(s[i]);
    } else {
      largeLetters.push(s[i]);
    }
  }
  return sortFnc(smallLetters).concat(sortFnc(largeLetters)).join("");
}

function sortFnc(arr) {
  return arr.sort().reverse();
}
```
