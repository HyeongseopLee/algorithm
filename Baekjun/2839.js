let input = require("fs").readFileSync("/").toString().split(" ");

let count = 0;
// true가 나오면 반복문을 마친다
while (true) {
  // nKg이 5kg에 맞아떨어진다면,
  // 지금까지의 count에 nKg에 5를 나눈 몫을 더하고 반복문을 종료한다.
  if (input % 5 === 0) {
    count = input / 5 + count;
    break;
  }

  // 계속 돌리다가 nKg이 0보다 작아지면 count에 -1을 할당하고 반복문을 종료한다
  if (0 > input) {
    count = -1;
    break;
  }

  // 1회 반복 할 때마다 count에 1을 더한다
  count++;
  // 1회 반복 할때마다 nKg에서 3을 빼준다
  input -= 3;
}
console.log(count);
