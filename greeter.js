function nameGreeter(event){
    event.preventDefault()
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    document.querySelector('h2').innerText = "Hello, " + firstName + " " + lastName + "! "
}
const form = document.querySelector('form');
form.addEventListener("submit",nameGreeter);