# 로또의 최고 순위와 최저 순위

[프로그래머스 1단계 - 로또의 최고 순위와 최저 순위](https://programmers.co.kr/learn/courses/30/lessons/77484)

## 풀이
```javascript
function solution(lottos, win_nums) {
    var answer = [];
    let rank =[6,6,5,4,3,2,1];
    let zeroCount = 0; 
    
    // 일치하는 로또 번호의 갯수 = 맞춘 최저 갯수
    const lowestCount = lottos.filter((ele) => win_nums.includes(ele)).length;
    
    // 맞춘 최저 갯수 값에 0의 갯수를 더하면 맞춘 최대 갯수
    for(let num of lottos){
        if(num === 0){
            zeroCount += 1
        }
    }
    
    // 맞춘 최저, 최대 갯수를 이용하여 rank 배열에서 등수 숫자를 추출
    const lowestRank = rank[lowestCount];
    const highestRank = rank[lowestCount + zeroCount];
    
    answer.push(highestRank, lowestRank)
    return answer;
}
```