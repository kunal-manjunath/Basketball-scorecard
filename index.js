let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function incrementPointsForHome(points) {
    let newPoints = parseInt(homeScoreEl.textContent) + points
    homeScoreEl.textContent = newPoints
}

function incrementPointsForGuest(points) {
    let newPoints = parseInt(guestScoreEl.textContent) + points
    guestScoreEl.textContent = newPoints
}

function resetGame() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}