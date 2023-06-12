function nameCounter(event){
    event.preventDefault()
    const firstName = String(event.target.firstName.value);
    const lastName = String(event.target.lastName.value);
    const result = firstName.length + lastName.length;
    document.querySelector('h2').innerText = "Hello "  + firstName + " " + lastName + " your name has " + result + " letters in it! "
}

const form = document.querySelector('form');
form.addEventListener('submit',nameCounter);