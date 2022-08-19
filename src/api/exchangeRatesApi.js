import axios from "axios";

const API_KEY = 'j9KUlEMt8Rwtf0I7GhsVeIoKRKzkG4nw';

const customAxios = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data',
})

customAxios.defaults.headers.common['apikey'] = API_KEY;

export const getLatestCurrencyToUAH = async (symbols) => {
    try{
        const {data} = await customAxios.get(`/latest?base=UAH&symbols=${symbols.join(',')}`);

        return data.rates;
    } catch (err) {
        console.log(err);
    }
}
