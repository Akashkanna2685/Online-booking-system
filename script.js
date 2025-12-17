function register() {
alert("Registered Successfully");
window.location = "login.html";
}


function login() {
window.location = "booking.html";
}


function bookTicket() {
let name = document.getElementById("name").value;
let place = document.getElementById("place").value;
let tickets = document.getElementById("tickets").value;
let total = tickets * 500;


localStorage.setItem("booking", `Name: ${name}<br>Place: ${place}<br>Tickets: ${tickets}<br>Total: ₹${total}`);
window.location = "confirmation.html";
}