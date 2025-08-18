import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(from);

  console.log(from, to);

  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo);
  const options = Object.keys(currencyInfo);
  // console.log(options);
  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  return (
    <>
      <div id="main">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            selectCurrency={from}
            currencyOption={options}
            onAmountChange={(amount) => setAmount(amount)}
            // onCurrencyChange={(currency) => setAmount(amount)}
          />
          <div id="swap_btn_div">
            <button id="swap_btn" onClick={swap}>
              swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            selectCurrency={to}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            amountDisable
          />
          <button type="submit" id="button">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
