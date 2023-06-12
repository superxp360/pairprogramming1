function yenToUSD(event){
    event.preventDefault()
    const yen = Number(event.target.yen.value)
    const usd = yen * .00072;
    document.querySelector('h2').innerText = yen.toLocaleString() + " Yen is " + usd.toLocaleString() + "USD"
}


const form = document.querySelector('form')
form.addEventListener('submit',yenToUSD)