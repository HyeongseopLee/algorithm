# 같은 숫자는 싫어

[프로그래머스 1단계 - 같은 숫자는 싫어](https://programmers.co.kr/learn/courses/30/lessons/12906)

## 풀이
- filter안에서 요소를 돌면서 다음 인덱스의 요소와 값이 다른 요소들을 반환한다

```javascript
    function solution(arr) {
  return arr.filter((element, index) => element !== arr[index+1]);
}
```

## 시도(실패)
```javascript
function solution(arr){
    var answer = [];
    let status = 0;
    for(let i = 0; i < arr.length; i++){
            if(arr[i] === arr[i+1]){
                status += 1;
            }else{
                status = 0;
            }
        console.log(status, arr[i], arr[i+1])
        }    
    return answer;
}
```