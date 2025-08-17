import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQUVERSTWXYZabcdefghijklmnopquverstwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, characterAllowed, numberAllowed, setPassword]);

  const copyClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("password copy successfully");
  }, [password]);

  useEffect(generatePassword, [length, numberAllowed, characterAllowed]);
  return (
    <>
      <h1 id="heading">Password Genrator</h1>
      <div id="outer_div">
        <div id="main_div">
          <div id="password_input">
            <input
              type="text"
              id="pass_input_field"
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button id="copy_btn" onClick={copyClipBoard}>
              copy
            </button>
          </div>
          <div id="range_div">
            <input
              type="range"
              min={8}
              max={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="lenght">length{length}</label>

            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character">character</label>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
