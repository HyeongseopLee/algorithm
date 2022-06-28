# 소수 만들기

[프로그래머스 1단계 - 소수 만들기](https://programmers.co.kr/learn/courses/30/lessons/12977)

## 풀이

- 한번 더 혼자 풀어보고 풀이 써놓기

```javascript
function solution(nums) {
  var answer = 0;
  const arr = [];
  const leng = nums.length;
  let sum;
  for (let i = 0; i < leng; i++) {
    for (let j = i + 1; j < leng; j++) {
      for (let k = j + 1; k < leng; k++) {
        sum = nums[i] + nums[j] + nums[k];
        arr.push(sum);
      }
    }
  }
  const filtered = arr.filter((a) => {
    // a가 다른 수로 나누어 떨어지면 소수 아님
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
    // 그래도 1보단 크지?
    return a > 1;
  });
  return filtered.length;
}
```
- 중첩 반복문
- 소수는 1과 자기자신으로만 나누어 떨어지는 수이다. 소수는 정수 1보다 크다
