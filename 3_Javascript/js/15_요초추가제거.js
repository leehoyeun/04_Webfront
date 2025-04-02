// 요소.remove() : 요소 제거

// 공통적으로 사용되는 요소를 전역 변수 선언
const addBtn = document.querySelector("#add");//추가버튼
const calcBtn = document.querySelector("#calc");//계산버튼

const container = document.querySelector(".container")//div
// 동적으로 만들어진 요소를 최종적으로 붙여야 하는 요소

// 추가 버튼 클릭 시
addBtn.addEventListener("click",()=>{

  /*
  <div class="row">
            <input type="number" class="input-number">
            <span class="remove-row">&times;</span>
        </div>
    */


  // 1. div 요소 생성하기
  const row = document.createElement("div"); //<div></div>

  // 2. row 요소에 class 추가하기
  row.classList.add("row"); //<div class = "row"></div>

  // 3. input 요소 생성하기
  const input = document.createElement("input");//<input>

  // 4. type="number" 추가하기
  // input.type = "number";
  input.setAttribute("type","number");//<input type="number">

  // 5. class 추가하기
  //input.setAttribute("class","test");
  //사용은 가능하나 classList가 더편해서 classList로 사용함
  input.classList.add("input-number");
  //<input type ="number" class="input-number">
  // input.classList.add("test"); // 추가도 잘됨

  // 6. span 요소 생성하기
  const span = document.createElement("span");

  // 7. span 태그에 클래스 "remove-row" 추가
  span.classList.add("remove-row");

  // 8. 내용으로 &times; 추가 (innerHTML 사용)
  span.innerHTML = "&times;";// <span class = "remove-row">&times</span>

  //-----조립하기-----

  // 9. div.row 요소에게 자식으로 input,span 추가
  row.append(input,span);

  // 10. 완성된 div를 container에 마지막 자식으로 추가하기
  container.append(row);


  //**************************** */

  //클릭된 x 버튼의 부모 요소를 제거

  // 1. 만들어진 x번튼(span)에 이벤트 리스너 추가
  span.addEventListener("click",(e)=>{

  // 2. 현재 이벤트가 발생한 요소 (클릭된 x버튼) 의 
  // 부모 요소를 선택(탐색)
  const parent = e.target.parentElement; //div.row

  // 3. 부모 요소를 제거하기
  parent.remove();
  });


});


// -----------------------------------

// 계산 버튼 클릭 시
calcBtn.addEventListener("click",()=>{


  //1) 모든 클래스가 input-number 요소 얻어오기
  const numbers = document.querySelectorAll(".input-number");
  
  //2) for문 으로 모든 요소 접근하여
  // 작성된 값(value)을 얻어와
  // 숫자로 변경(Number()) 한 후
  // 합계 저장 변수 sum 에 누적

  let sum = 0;

  for(let i=0;i<numbers.length;i++){
    sum += Number(numbers[i].value);
  }

  // 3) for문 끝나면 결과출력
  alert("결과 :"+sum);

});
