console.log("Arquivo carregado para a pagina! ")
const USD = 4.87
const EUR = 5.30
const GBP = 6.15

// selecionando os elemento do HTML 
const form = document.querySelector("form")
const input = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

//pega valida valor do imput
input.addEventListener("input", () => {
    const regex = /\D+/g
    console.log(input.value)
    input.value = input.value.replace(regex, "")
})

//pega o evento do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            converter(input.value, USD, "US$")
            break
        case "EUR":
            converter(input.value, EUR, "€")
            break
        case "GBP":
            converter(input.value, GBP, "£")
            break
    }
})

//Função que converte o valor da Moeda.
function converter(input, currency, simbol) {
    try {
        description.textContent = `${simbol} 1 = ${formatarMoedaBR(currency)}`
        
        let total = input * currency

        result.textContent = `${formatarMoedaBR(total)}`
        footer.classList.add("show-result")
        
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Erro ao tentar converter a moeda, tente novamente mais tarde!")
    }
}

// formata o valor em reais BR
function formatarMoedaBR(valor){
    return Number(valor).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })
}