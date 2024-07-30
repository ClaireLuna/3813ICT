var arr = [15, 12, 99, 36, 19];

console.log(arr);

arr.push(20);

console.log(arr);

arr.unshift(105);

console.log(arr);

arr.splice(2, 0, 17);

console.log(arr);

arr.pop();

console.log(arr);

arr.splice(1, 1);

console.log(arr);

arr[4] = 100;

console.log(arr);

arr = arr.map((n) => n * 2);

console.log(arr);

sum = arr.reduce((a, c) => a + c);

console.log(sum);
