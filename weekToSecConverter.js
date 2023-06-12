function weekToSec (event) {
    event.preventDefault()
    const weeks = Number(event.target.weeks.value);
    const sec = weeks * 604800
    document.querySelector('h2').innerText = "There are " + sec.toLocaleString() + " second " + " in " + weeks + " weeks "
}

const form = document.querySelector('form');
form.addEventListener('submit',weekToSec);