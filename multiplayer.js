const userName = document.getElementById("userName");
const gameForm = document.getElementById("gameForm")

userName.addEventListener("input", (e) => {
  if (e.target.id === "userName") {
    if (userName.value === "") {
      userName.setCustomValidity("Please enter a name");
    } else {
      userName.setCustomValidity("");
    }
  }
});


gameForm.addEventListener("submit", (e) => {
    if(e.target.id === "gameForm"){
        e.preventDefault()
        gameForm.style.display = "none"
    }    
})