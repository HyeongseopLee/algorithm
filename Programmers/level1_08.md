# 문자열 내 마음대로 정렬하기

[프로그래머스 1단계 - 문자열 내 마음대로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/12915)

## 풀이

- 1. sort() 메서드를 이용해서 n번째 문자열을 비교해 알맞은 숫자를 리턴해 오름차순으로 정렬
- 2. n번째 문자열이 같은 단어라면, 두 문자열 비교해 알맞은 숫자를 리턴

```javascript
function solution(strings, n) {
  var answer = [];
  strings.sort(function (a, b) {
    if (a[n] < b[n]) {
      return -1;
    }
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] === b[n]) {
      return a < b ? -1 : 1;
    }
    return 0;
  });
  return strings;
}
```

- 처음엔 stings안에서 맵을 돌려 각 str에 slice(n,n+1) 를 이용해서 n번째 문자열을 받아왔는데, 그냥 배열 인덱스를 이용하면 되는거였다
- sort 작동 방식
  - a - b > 0 (양수)이면 a와 b의 위치를 바꾼다
  - a - b < 0 (음수)이면 a가 b보다 먼저온다
  - a - b = 0 이면 a와 b의 순서를 변경하지 않는다
    e.g. [c,b,d,e,a].sort((a,b) => a - b)
  1.

## 다른 사람의 풀이

- 1. localeCompare은 문자열과 비교 문자열을 비교하고 그 결과에 따른 숫자를 반환
- 2. n번 쨰 문자열이 같으면 두 문자열을 비교해 알맞은 숫자를 반환
- 3. n번 째 문자열이 다르면 두 n번 째 문자열을 비교해 알맞은 숫자를 반환
- 4. 리턴된 숫자로 sort

```javascript
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
```

## 참고

-[localCompare 메서드] https://opentutorials.org/course/50/91 -[다른 사람의 풀이] https://velog.io/@graphicnovel/Javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-level1-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4-%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0
