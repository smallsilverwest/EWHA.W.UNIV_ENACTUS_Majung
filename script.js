const data = {
  phone: "01012345678",
  centerPhone: "021234567", // 등록 센터 번호 추가
  status: "missing" 
};

const callBtn = document.getElementById("callBtn");
const centerBtn = document.querySelector(".btn.orange");
const statusText = document.getElementById("statusText");
const toggle = document.getElementById("toggle");

//전화 연결
if (callBtn) {
  callBtn.href = `tel:${data.phone}`;
}

// 센터 연결
if (centerBtn) {
  centerBtn.href = `tel:${data.centerPhone}`;
}

function updateUI() {
  // index.html에만 있는 요소
  if (!statusText || !toggle) return;

  if (data.status === "missing") {
    statusText.innerHTML = `<span class="dot">●</span> 현재, 실종 신고가 접수된 어르신입니다.`;
    statusText.style.display = "inline";
    toggle.classList.add("active");
  } else {
    statusText.style.display = "none";
    toggle.classList.remove("active");
  }
}

updateUI();

if (toggle) {
  toggle.addEventListener("click", () => {
    data.status = (data.status === "missing") ? "normal" : "missing";
    updateUI();
  });
}
