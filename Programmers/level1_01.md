# 최소직사각형


[프로그래머스 2단계 - 최소직사각형](https://programmers.co.kr/learn/courses/30/lessons/86491)

## 풀이

```javascript
function solution(sizes) {
  for (let card of sizes) {
    if (card[0] < card[1]) [card[0], card[1]] = [card[1], card[0]];
  }
    const MathW = Math.max(...sizes.map(a => a[0]));
    const MathH = Math.max(...sizes.map(a => a[1]));
    return MathW* MathH
}
```