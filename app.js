const multiplayer = document.getElementById("multiplayer")
const computer = document.getElementById("computer")

multiplayer.addEventListener("click", (e) => {
    if(e.target.id === "multiplayer"){
        window.location.href = "https://mjmealey.github.io/tic-tac-toe/multiplayer.html"
    }
})

computer.addEventListener("click", (e) => {
    if(e.target.id === "computer"){
        window.location.href = "https://mjmealey.github.io/tic-tac-toe/vsComputer.html"
    }
})