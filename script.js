// Seletores globais dos elementos principais
const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertSelect = document.querySelector(".convert-currency")

// Taxas de câmbio fixas (valores fictícios)
const rates = {
    BRL: 1,
    USD: 6.09,
    EUR: 6.42,
    GBP: 7.74
}

// Dados das moedas para exibição dinâmica
const currencyData = {
    USD: { name: "Dólar americano", img: "./assets/dolar.png", placeholder: "US$ 10,000.00" },
    EUR: { name: "Euro", img: "./assets/euro.png", placeholder: "€ 10,000.00" },
    GBP: { name: "Libra", img: "./assets/libra.png", placeholder: "£ 10,000.00" },
    BRL: { name: "Real", img: "./assets/real.png", placeholder: "R$ 10,000.00" }
}

// Função principal que faz a conversão dos valores
function convertValues() {
    const inputField = document.querySelector("#input-value")
    const inputCurrencyValue = Number(inputField.value.replace(",", "."))
    const currencyValueToConvert = document.querySelector(".currency-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")
    const from = convertSelect.value
    const to = currencySelect.value

    // Validação simples para evitar erros
    if (!inputField.value || isNaN(inputCurrencyValue)) {
        currencyValueToConvert.innerHTML = "Valor inválido"
        currencyValueToConverted.innerHTML = "-"
        return
    }

    // Conversão: de qualquer moeda para real, depois para a moeda destino
    const valueInBRL = inputCurrencyValue * rates[from]
    const convertedValue = valueInBRL / rates[to]

    // Formata e exibe o valor de origem
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(
        from === "BRL" ? "pt-BR" : from === "USD" ? "en-US" : from === "EUR" ? "de-DE" : "en-GB",
        { style: "currency", currency: from }
    ).format(inputCurrencyValue)

    // Formata e exibe o valor convertido
    currencyValueToConverted.innerHTML = new Intl.NumberFormat(
        to === "BRL" ? "pt-BR" : to === "USD" ? "en-US" : to === "EUR" ? "de-DE" : "en-GB",
        { style: "currency", currency: to }
    ).format(convertedValue)
}

// Função que atualiza nomes, imagens e placeholders das moedas ao trocar o select
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-img')
    const currencyConvertName = document.getElementById('currency-convert-name')
    const currencyConvertImage = document.getElementById('currency-convert')
    const inputField = document.getElementById('input-value')

    // Atualiza informações da moeda de origem
    const from = convertSelect.value
    currencyConvertName.innerHTML = currencyData[from].name
    currencyConvertImage.src = currencyData[from].img
    inputField.placeholder = currencyData[from].placeholder

    // Atualiza informações da moeda de destino
    const to = currencySelect.value
    currencyName.innerHTML = currencyData[to].name
    currencyImage.src = currencyData[to].img

    // Atualiza os valores convertidos na tela
    convertValues()
}

// Eventos para atualizar a tela ao trocar selects ou clicar no botão
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
convertSelect.addEventListener("change", changeCurrency)


