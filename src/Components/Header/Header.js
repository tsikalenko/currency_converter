import "./style.scss";

const Header = (props) => {
    const {currencyRate, isLoading} = props;

    const createCurrencyList = () => {
        return Object.keys(currencyRate).map(key => <li key={key} className={'header__item item'}>
                <span className={'item__title'}>{key}</span><span className={'item__text'}>=</span><span
                className={'item__value'}>{currencyRate[key]}</span>
            </li>
        )
    }

    return <>
        <div className={'header'}>
            <h1 className={'header__title'}>Currency Converter</h1>
            <div className={'header__info'}>
                <p className={'header__subtitle'}>1 UAH in</p>
                <ul className={'header__list'}>
                    {isLoading ? 'Rate is loading...' : createCurrencyList()}
                </ul>
            </div>
        </div>
    </>;
}

export default Header;