class CryptoAPI {
    constructor() {
        this.APIkey = '0c94cf88d1260d8a6812a9034a39ce91a7f73d87'
    }

    async getVal(currency, cryptocurrency) {
        let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.APIkey}&ids=${cryptocurrency}&interval=1d,30d&convert=${currency}`

        const response = await fetch(url)
        const resultAPI = await response.json()
        return {
            resultAPI
        }

    }
}