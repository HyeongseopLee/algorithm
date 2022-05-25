# 약수의 합

[프로그래머스 1단계 - 약수의 합](https://programmers.co.kr/learn/courses/30/lessons/12928)

## 풀이
- 1~n까지의 숫자로 정수 n을 나누었을 때 나머지가 0인 수 = 약수

```javascript

function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0 ){
            answer += i
        } 
    }
    return answer;
}
```