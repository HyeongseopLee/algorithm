# 시저 암호

[프로그래머스 1단계 -시저 암호](https://programmers.co.kr/learn/courses/30/lessons/12926)

## 풀이
- 공백은 공백으로 리턴
- 영문 -> 숫자 by 아스키코드
- 숫자 + 거리n
- 숫자 -> 영문
- (문자,요일) 몇번 뒤, 며칠뒤의 결과를 구하는 로직은 -총 문자의 수(26)나 -총 요일의 수(7) 를 하면된다.
- ex) 화요일부터 9일 뒤의 요일을 구해라. 2(화요일 idx) + 9 - 7(일주일) = 4(목요일 idx)

```javascript
function solution(s, n) {
  return s
    .split("")
    .map((element) => {
      if (element === " ") return " ";
      const code = element.charCodeAt(0);
      if ((code + n > 90 && code <= 90) || code + n > 122) {
        return String.fromCharCode(code + n - 26);
      } else {
        return String.fromCharCode(code + n);
      }
    })
    .join("");
}
```