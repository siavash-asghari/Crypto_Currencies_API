// class
const crypto = new CryptoAPI();
const ui = new UI();



// variable
let form = document.querySelector('#form')



// eventlistener
listeners();

function listeners() {
    form.addEventListener('submit', getValuation)
}




// function
function getValuation(e) {
    e.preventDefault();
    let currency = document.querySelector('#currency').value
    let cryptocurrency = document.querySelector('#cryptocurrency').value

    if (currency !== '' && cryptocurrency !== '') {
        crypto.getVal(currency, cryptocurrency)
            .then(data => {
                const dataAPI = data.resultAPI[0]
                ui.createResult(dataAPI, currency)
            })



    } else if (currency == '' && cryptocurrency == '') {
        ui.printMessage('please choose the currency and caryptocurrency', 'deep-orange darken-4 card-panel')
    } else if (currency == '') {
        ui.printMessage('please choose the currency', 'deep-orange darken-4 card-panel')
    } else if (cryptocurrency == '') {
        ui.printMessage('please choose the caryptocurrency', 'deep-orange darken-4 card-panel')
    }

}