import './style.scss'

const CurrencyInput = (props) => {
    const {
        currencyRate,
        inputValue,
        setToInput,
        selectValue,
        setSelectValue,
        secondValue,
        setSecondValue,
        secondCurrency
    } = props;

    const currencyRateKey = Object.keys(currencyRate);

    const createOptions = () => {
        return currencyRateKey.map(key => <option className={'currency__type'} key={key} value={key}>{key}</option>)
    }

    const handleInputChange = (event) => {
        setToInput(event.target.value);
        setSecondValue((event.target.value / currencyRate[selectValue] * currencyRate[secondCurrency]).toFixed(3));
    }

    const changeValue = (event) => {
        setSelectValue(event.target.value);
        setToInput((secondValue * currencyRate[event.target.value] / currencyRate[secondCurrency]).toFixed(3));
    }

    return <>
        <div className={'currency'}>
            <input className={'currency__input'} type="number" value={inputValue} onChange={handleInputChange}/>
            <select className={'currency__selector'} onChange={changeValue} value={selectValue}>
                {createOptions()}
            </select>
        </div>
    </>
}

export default CurrencyInput;