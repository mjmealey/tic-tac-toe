const multiplayer = document.getElementById("multiplayer")
const computer = document.getElementById("computer")

multiplayer.addEventListener("click", (e) => {
    if(e.target.id === "multiplayer"){
        window.location.href = "https://mjmealey.github.io/tic-tac-toe/multiplayer.html"
    }
})