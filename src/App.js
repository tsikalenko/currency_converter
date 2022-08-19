import './App.css';
import {useEffect, useState} from "react";
import Header from "./Components/Header";
import {getLatestCurrencyToUAH} from "./api/exchangeRatesApi";
import Translator from "./Components/Translator";

function App() {
    const [currencyRate, setCurrencyRate] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setCurrencyRate(await getLatestCurrencyToUAH(['EUR', 'USD']));
        })();
        setIsLoading(false);
    }, [])
    return (
        <div className="App">
            <Header currencyRate={currencyRate} isLoading={isLoading}/>
            <Translator currencyRate={currencyRate} isLoading={isLoading}/>
        </div>
    );
}

export default App;
