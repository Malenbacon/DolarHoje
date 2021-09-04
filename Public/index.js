const Real = document.getElementById('inputReais');
const Dolar = document.getElementById('inputDolar');


fetch(' https://economia.awesomeapi.com.br/last/USD-BRL')
.then ( dados => dados.json())
.then ( dados => {
    SetarDolarJSON(dados);
})
.catch(err => console.log(`error:${err}`))

const SetarDolarJSON = dados => {
    let data = dados.USDBRL.bid; 
    let convertido = parseFloat(data);
    let Valor = convertido.toFixed(2);
    Real.innerHTML = `R$${Valor}`; 
}

