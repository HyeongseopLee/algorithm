# 두 개 뽑아서 더하기

[프로그래머스 1단계 - 두 개 뽑아서 더하기](https://programmers.co.kr/learn/courses/30/lessons/68644)

## 풀이
- 현재 인덱스의 값 + 다음 인덱스의 값을 한 번씩 더한 값을 배열에 넣는다
- 오름차순 정렬
- 배열 내 중복값 제거

```javascript
function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j])
    }
}
    answer.sort((a,b) => a - b);
    const set = new Set(answer);
    const newArr = [...set];
    return newArr;
}
```
- set객체 내엔 자료형에 관계없이 유일한 값을 저장 할 수 있다. 즉, set 내에는 중복 값이 있을 수 없다.