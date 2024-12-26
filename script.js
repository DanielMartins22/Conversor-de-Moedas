const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertSelect = document.querySelector(".convert-currency")

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-value").value
    const currencyValueToConvert = document.querySelector(".currency-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value);
    console.log(convertSelect.value);

    const dolarToday = 6.09
    const euroToday = 6.42
    const libraToday = 7.74
    const realToday = 1


    if  (convertSelect.value == "BRL"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format (inputCurrencyValue)
    }

    if  (convertSelect.value == "USD"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (convertSelect.value == "EUR") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue)
    }

    if (convertSelect.value == "GBP"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue)
    }



    if (currencySelect.value == "BRL") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday )
    }


    if (currencySelect.value == "USD") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "EUR") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "GBP"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US" , {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")
    const currencyConvertName = document.querySelector(".moeda")
    const currencyConvertImage = document.querySelector("#currency-convert")
    const inputField = document.getElementById("input-value");

    if(convertSelect.value == "USD"){
        currencyConvertName.innerHTML= "Dólar americano"
        currencyConvertImage.src = "./assets/dolar.png"
        inputField.placeholder = "US$ 10,000.00"
    }

    if(convertSelect.value == "EUR"){
        currencyConvertName.innerHTML="Euro"
        currencyConvertImage.src = "./assets/euro.png"
        inputField.placeholder = "€ 10,000.00"
    }

    if(convertSelect.value == "GBP"){
        currencyConvertName.innerHTML="Libra"
        currencyConvertImage.src= "./assets/libra.png"
        inputField.placeholder = "£ 10,000.00"
    }

    if(convertSelect.value == "BRL"){
        currencyConvertName.innerHTML= "Real"
        currencyConvertImage.src = "./assets/real.png"
        inputField.placeholder = "R$ 10,000.00"
    }



    if(currencySelect.value == "USD"){
        currencyName.innerHTML= "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "EUR"){
        currencyName.innerHTML= "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "GBP"){
        currencyName.innerHTML="Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "BRL"){
        currencyName.innerHTML= "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

currencySelect.addEventListener("change" , changeCurrency )
convertButton.addEventListener("click", convertValues);
convertSelect.addEventListener("change" , changeCurrency)
