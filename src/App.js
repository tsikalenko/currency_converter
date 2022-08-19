import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Header from "./Components/Header";
import {getLatestCurrencyToUAH} from "./api/exchangeRatesApi";

function App() {
    const currency = ['EUR', 'USD'];
    const [currencyRate, setCurrencyRate] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setCurrencyRate(await getLatestCurrencyToUAH(currency));
        })();
        // setCurrencyRate({EUR: 0.027118, USD: 0.027215});
        setIsLoading(false);
    }, [])
    return (
        <div className="App">
            <Header currencyRate={currencyRate} isLoading={isLoading}/>
        </div>
    );
}

export default App;
