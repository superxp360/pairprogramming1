function fahreheitToCelsius(event){
    event.preventDefault()
    const far = Number(event.target.far.value)
    const cel = (far -32) * 5/9
    document.querySelector('h2').innerText = far + " degrees F is " + cel.toFixed(2) + " degree C " 
}

const form = document.querySelector('form')
form.addEventListener("submit" , fahreheitToCelsius)