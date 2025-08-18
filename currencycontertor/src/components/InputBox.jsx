import React from "react";
function InputBox({
  label,
  amount,
  selectCurrency = "usd",
  currencyOption = [],
  onAmountChange,
  onCurrencyChange,
  AmountDisable = false,
  CurrencyDisable = false,
}) {
  return (
    <>
      <div id="input_box">
        <div id="input_box_left">
          <label id="label">{label}</label>
          <input
            type="number"
            id="number_input"
            min={0}
            value={amount}
            disabled={AmountDisable}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          />
        </div>
        <div id="input_box_right">
          <label id="label">currency type</label>
          <select
            name=""
            id="select_input"
            value={selectCurrency}
            disabled={CurrencyDisable}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOption.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
export default InputBox;
