const InputBox = document.getElementById("inputbox");
const ListContaier = document.getElementById("list-contaier");

function addTask() {
  if (InputBox.value === "") {
    alert("You must write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContaier.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
  saveData();
}

ListContaier.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ListContaier.innerHTML);
}

function showTask() {
  ListContaier.innerHTML = localStorage.getItem("data");
}
showTask();
