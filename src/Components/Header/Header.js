import "./style.scss";

const Header = (props) => {
    const {currencyRate, isLoading} = props;

    const createCurrencyList = () => {
        return Object.keys(currencyRate).map(key => <li className={'header__item item'}>
                <span className={'item__title'}>{key}</span><span className={'item__text'}>=</span><span className={'item__value'}>{currencyRate[key]}</span>
            </li>
        )
    }

    return <>
        <div className={'header'}>
            <p className={'header__title'}>1 UAH in</p>
            <ul className={'header__list'}>
                {isLoading ? 'Rate is loading...' : createCurrencyList()}
            </ul>
        </div>
    </>;
}

export default Header;