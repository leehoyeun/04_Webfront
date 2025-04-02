// 문서가 완전히 로드된 후에 실행되도록 함
document.addEventListener("DOMContentLoaded", () => {
  // 식당명 span과 input 요소 가져오기
  const resNameSpan = document.getElementById("resName");
  const resNameInput = document.getElementById("resNameInput");

  // 버튼 요소들 가져오기
  const updateBtn = document.getElementById("updateBtn");
  const addMenuBtn = document.getElementById("addMenu");
  const deleteMenuBtn = document.getElementById("deleteMenu");
  const exitBtn = document.getElementById("exitBtn");

  // 버튼 영역 컨테이너
  const normalContainer = document.querySelector(".normal-container");
  const editContainer = document.querySelector(".edit-container");

  // 메뉴 항목이 들어있는 컨테이너
  const menuContainer = document.querySelector(".menu-container");

  // ✅ 식당명(span) 클릭 시 input으로 변경
  resNameSpan.addEventListener("click", () => {
    resNameInput.value = resNameSpan.textContent.trim(); // 기존 텍스트를 input에 복사
    resNameSpan.style.display = "none"; // span 감추기
    resNameInput.classList.remove("res-name-hidden"); // input 보이게 하기
    resNameInput.focus(); // input에 포커스
  });

  // ✅ input에서 포커스 벗어나면 다시 span으로 변경
  resNameInput.addEventListener("blur", () => {
    const newName = resNameInput.value.trim(); // input에 입력된 텍스트 가져오기
    if (newName !== "") {
      resNameSpan.textContent = newName; // 입력된 값으로 span 업데이트
    }
    resNameInput.classList.add("res-name-hidden"); // input 숨기기
    resNameSpan.style.display = "inline"; // span 다시 보이게
  });

  // ✅ "수정" 버튼 클릭 시 편집 모드 버튼들 보이게 하기
  updateBtn.addEventListener("click", () => {
    normalContainer.classList.add("b-hidden"); // 수정 버튼 숨기기
    editContainer.classList.remove("b-hidden"); // 추가/삭제/종료 버튼 보이기
  });

  // ✅ "종료" 버튼 클릭 시 원래 상태로 돌아감
  exitBtn.addEventListener("click", () => {
    editContainer.classList.add("b-hidden"); // 추가/삭제/종료 숨기기
    normalContainer.classList.remove("b-hidden"); // 수정 버튼 다시 보이기
  });

  // ✅ span을 클릭하면 input으로 바뀌는 기능을 함수로 만듦
  function makeEditable(span) {
    span.addEventListener("click", () => {
      const oldText = span.textContent.trim(); // 현재 텍스트 저장
      const input = document.createElement("input"); // input 생성
      input.type = "text"; // 텍스트 입력 필드로 지정
      input.value = oldText; // 기존 텍스트를 input에 설정

      // 메뉴명과 가격 구분해서 클래스 지정
      if (span.classList.contains("menu-name")) {
        input.className = "menu-name-input";
      } else if (span.classList.contains("menu-price")) {
        input.className = "menu-price-input";
      }

      span.replaceWith(input); // span → input 변경
      input.focus(); // input에 포커스

      // 포커스를 잃으면 다시 span으로 되돌리기
      input.addEventListener("blur", () => {
        const newSpan = document.createElement("span"); // 새 span 만들기
        newSpan.className = span.className; // 원래 클래스 유지
        newSpan.textContent = input.value.trim() || oldText; // 빈 값이면 원래 텍스트 유지
        makeEditable(newSpan); // 새 span에도 클릭 이벤트 연결
        input.replaceWith(newSpan); // input → span 변경
      });
    });
  }

  // ✅ 페이지 로드시 기존 메뉴에 체크박스와 수정 기능 추가
  document.querySelectorAll(".menu").forEach(menu => {
    const nameSpan = menu.querySelector(".menu-name"); // 메뉴 이름 span
    const priceSpan = menu.querySelector(".menu-price"); // 메뉴 가격 span

    makeEditable(nameSpan); // 이름 수정 기능 연결
    makeEditable(priceSpan); // 가격 수정 기능 연결

    //체크박스가 없다면 생성해서 앞에 추가
    if (!menu.querySelector("input[type='checkbox']")) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "menu-check";
      menu.insertBefore(checkbox, nameSpan); // 이름 span 앞에 삽입
    }
  });

  // ✅ "추가" 버튼 클릭 시 새 메뉴 항목 추가
  addMenuBtn.addEventListener("click", () => {
    const li = document.createElement("li"); // 메뉴 항목 li 생성
    li.className = "menu"; // 클래스 지정

    // 체크박스 만들기
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "menu-check";

    // 메뉴 이름 span 생성
    const nameSpan = document.createElement("span");
    nameSpan.className = "menu-name";
    nameSpan.textContent = "새 메뉴";
    makeEditable(nameSpan); // 수정 기능 연결

    // 메뉴 가격 span 생성
    const priceSpan = document.createElement("span");
    priceSpan.className = "menu-price";
    priceSpan.textContent = "0원";
    makeEditable(priceSpan); // 수정 기능 연결

    // 요소들 조립
    li.appendChild(checkbox);
    li.appendChild(nameSpan);
    li.appendChild(priceSpan);

    // 메뉴 영역에 추가
    menuContainer.appendChild(li);
  });

  // ✅ "삭제" 버튼 클릭 시 체크된 메뉴만 삭제
  deleteMenuBtn.addEventListener("click", () => {
    const menus = document.querySelectorAll(".menu");
    let deleted = false;

    menus.forEach(menu => {
      const checkbox = menu.querySelector("input[type='checkbox']");
      if (checkbox && checkbox.checked) {
        menu.remove(); // 체크된 항목 삭제
        deleted = true;
      }
    });

    // 아무 것도 삭제되지 않았다면 경고
    if (!deleted) {
      alert("삭제할 메뉴를 선택해주세요!");
    }
  });
});
