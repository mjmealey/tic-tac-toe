const userName = document.getElementById("userName");
const difficulty = document.getElementById("difficulty");
const computerForm = document.getElementById("computerForm");

userName.addEventListener("input", (e) => {
  if (e.target.id === "userName") {
    if (userName.value === "") {
      userName.setCustomValidity("Please enter a name");
    } else {
      userName.setCustomValidity("");
    }
  }
});

difficulty.addEventListener("change", (e) => {
  if (e.target.id === "difficulty") {
    if (
      difficulty !== "Easy" ||
      "Medium" ||
      "Hard" ||
      "Very Hard" ||
      "Nearly Impossible"
    ) {
      difficulty.setCustomValidity("Please choose a difficulty");
    } else {
      difficulty.setCustomValidity("");
    }
  }
});

computerForm.addEventListener("submit", (e) => {
    if(e.target.id === "computerForm"){
        e.preventDefault()
    }
})