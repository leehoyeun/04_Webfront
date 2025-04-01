//name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1(name){
  console.log(`1번 : Hello,${name}!`);
}

fn1("호연");


// 사용자에게 입력 받기
let input1 = prompt("첫 번째 숫자를 입력하세요:");
let input2 = prompt("두 번째 숫자를 입력하세요:");

// 문자열을 숫자로 변환
let num1 = Number(input1);
let num2 = Number(input2);

// 함수 선언 및 정의
function addNumbers(a, b) {
  return a + b;
}

// 함수 호출
let result = addNumbers(num1, num2);


// 결과 출력
console.log("두 수의 합:", result);
alert("두 수의 합: " + result); // 화면에 출력


//두 개의 숫자를 매개변수로e 받아 곱한 결과를 반환하는 화살표 함수를 작성

const mutiply = (a,b) => a*b ;
console.log("3번 : ",mutiply(2,5));


//두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고,
//그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오<
function compareNumbers(a,b){
  if(a>b){
    console.log("4번 : 첫번째 숫자가 더 큽니다.");
  }else{
    console.log("4번 : 두번째 숫자가 더 크거나 같습니다")
  }
}

compareNumbers(5,3);
compareNumbers(2,4);

//문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오

function printLenght(str){
  console.log("5번 : ",str.lenght);
}
printLenght("Javascript"); //10

//문자열과 반복 횟수를 매개변수로 받아, 
//해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오

function repeatString(str,num){

  let result = "";

  for(let i=0;i<num;i++){
    result += str;
  }

  console.log("6번 : ",result);
}
repeatString("Hello",3);

//숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를
//true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
function isEven(num){
  return num % 2 ===0;
}

console.log("7번 :",isEven(4));// true
console.log("7번 :",isEven(7));// false

//세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 
// 함수를 선언 및 정의하고 호출하시오

function findMax(a,b,c){

  let max = a;

  if(max < b){
    max = b;
  }

  if(max<c){
    max=c;
  }

  return max;

  //내장 함수 Math.max():전달받은 값 중 가장 큰 수 반환
  // return Math.max(a,b,c);
}
console.log("8번 : ",findMax(1,5,3));

//9.배열을 매개변수로 받아 첫 번째 요소를 
// 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const getFirstElement = (arr) => {return arr[0]};
console.log("9번 : ",getFirstElement([10,20,30]));

//10.배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 
// 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
function sumAndAverage(arr){

  // let sum = 0;
  // for(let i=0; i<arr.lenght;i++){
  //   sum += arr[i];
  // }
  let sum = arr.reduce((acc,curr)=>{ return acc + curr});
  //배열.reduce( callback함수 ) : JS 배열의 메서드로(함수),배열의 모든 요소를 순회하면서
  //하나의 결과값을 누적하여 반환
  // acc (accumulator) : 이전 콜백 호출에서 반환된 값 (누산기 - 결과를 누적)
  // curr (currentValue) : 현재값 -현재 처리중인 배열 요소 값 
  let avg = sum/arr.lenght;

  return{"합계":sum,"평균":avg};
}

console.log("10번 : ",sumAndAverage([1,2,3,4,5]));

//숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 
// 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오

function calculate(a,b,operation){
  return operation(a,b);
}

function add(x,y){
  return x+y;
}
function minus(x,y){
  return x-y;
}

console.log("11번 :",calculate(5,3,add));
console.log("11번 :",calculate(5,3,minus));

//12.사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 해당 이름과 
// 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오

function greet(name,callback){
  callback(name);
}

function sayHello(name){
  console.log(`12번 : Hello,${name}`);
}
function sayGoodbye(name){
  console.log(`12번 : Bye,${name}`);
}

greet("길동",sayHello);
greet("영희",sayGoodbye);