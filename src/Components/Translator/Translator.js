import {useState} from "react";
import CurrencyInput from "../CurrencyInput";

import './style.scss'

const Translator = (props) => {
    const {currencyRate, isLoading} = props;

    const fullCurrencyRate = {...currencyRate, 'UAH': 1}

    const [firstInput, setFirstInput] = useState(1);
    const [secondInput, setSecondInput] = useState(1);
    const [firstSelect, setFirstSelect] = useState('UAH');
    const [secondSelect, setSecondSelect] = useState('UAH');

    return <>
        {isLoading
            ? 'Rate is loading...'
            : (
                <div className={'translator'}>
                    <CurrencyInput
                        currencyRate={fullCurrencyRate}
                        inputValue={firstInput}
                        setToInput={setFirstInput}
                        selectValue={firstSelect}
                        setSelectValue={setFirstSelect}
                        secondValue={secondInput}
                        setSecondValue={setSecondInput}
                        secondCurrency={secondSelect}
                    />
                    <p className={'translator__text'}>is equal</p>
                    <CurrencyInput
                        currencyRate={fullCurrencyRate}
                        inputValue={secondInput}
                        setToInput={setSecondInput}
                        secondValue={firstInput}
                        setSecondValue={setFirstInput}
                        selectValue={secondSelect}
                        setSelectValue={setSecondSelect}
                        secondCurrency={firstSelect}
                    />
                </div>
            )
        }
    </>
}

export default Translator;
