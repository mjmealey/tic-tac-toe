const multiplayer = document.getElementById("multiplayer")
const vsComputer = document.getElementById("vsComputer")

multiplayer.addEventListener("click", (e) => {
    if(e.target.id === "multiplayer"){
        window.location.href = "https://mjmealey.github.io/tic-tac-toe/multiplayer.html"
    }
})

vsComputer.addEventListener("click", (e) => {
    if(e.target.id === "vsComputer"){
        window.location.href = "https://mjmealey.github.io/tic-tac-toe/vsComputer.html"
    }
})

