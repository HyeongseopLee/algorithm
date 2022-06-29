//  달팽이는 올라가고 싶다

// [프로그래머스 2단계 - 달팽이는 올라가고 싶다](https://www.acmicpc.net/problem/2869)

// # 풀이1
// 1. Vm에 다다를 때 까지 반복문을 실행한다
// 2. 낮에 정상에 오르기에 성공한다면 break문을 써서 루프를 멈춘다
// 3. 낮에 정상에 오르지 못하면 day를 1 추가하고 오른 길이에서 떨어진 길이만큼 뺀다
// -> 시간초과.. !!

let input = require("fs").readFileSync("./input.txt").toString().split(" ");

let arr = [];
input.map((a) => arr.push(Number(a)));
const A = arr[0];
const B = arr[1];
let V = arr[2];
let day = 0;

console.log(Math.ceil((V - B) / (A - B)));

// # 풀이2
// 단순히 반복문을 돌리니 시간 복잡도 때문에 시간 초과가 났다.
