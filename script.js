function nextPage() {
    window.location.href = "yes.html";
}

function nextPage() {
    window.location.href = "book.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById("noButton").offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById("noButton").offsetHeight);
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
}

function fixDate() {
    // Add your logic for fixing a date
    alert("Yay! Let's plan a special date!");
    // You can redirect to another page or perform other actions here
}
