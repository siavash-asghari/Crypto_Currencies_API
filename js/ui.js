class UI {
    printMessage(message, className) {
        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))

        const result = document.querySelector('.messages')
        result.appendChild(div)

        setTimeout(() => {
            const divMesaage = document.querySelector('.messages').firstChild
            divMesaage.remove();
        }, 1000);
    }

    createResult(dataAPI, currency) {
        const prevResult = document.querySelector('#result div')
        if (prevResult) {
            prevResult.remove()
        }
        let currencyName;
        switch (currency) {
            case 'USD':
                currencyName = 'Doller'
                break;
            case 'GBP':
                currencyName = 'Pound'
                break;
            case 'EUR':
                currencyName = 'Euro'
                break;
        }

        let HTMLTemplate = `
        <div class="card teal lighten-2">
            <div class="card-content white-text">
                <h3 class="card-title">Result</h3>
                <img style="width: 50px" src="${dataAPI.logo_url}">
                <p>The Price of ${dataAPI.name} from ${currencyName} is: ${dataAPI.price}</p>
                <p>Last Day: ${dataAPI["1d"].price_change}</p>               
                <p>Last Month: ${dataAPI["30d"].price_change}</p>
            </div>
        </div>
        `

        this.showSpinner()
        this.showResult(HTMLTemplate)

    }

    showSpinner() {
        let spinner = document.querySelector('.spinner')
        let img = document.createElement('img')
        img.setAttribute('src', 'img/spinner.gif')
        spinner.append(img)
    }

    showResult(HTMLTemplate) {
        setTimeout(() => {
            document.querySelector('.spinner img').remove()
            let result = document.querySelector('#result')
            result.innerHTML = HTMLTemplate
        }, 3000);
    }
}