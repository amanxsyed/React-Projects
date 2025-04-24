/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState, useRef } from "react";

function App() {
  // useState is used to manage the state of the password generator
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  // This is useful for copying the password to the clipboard
  const PasswordRef = useRef(null);

  // useCallback is used to memoize the PasswordGenerator function
  // This function generates a random password based on the selected options  
  // It uses the useCallback hook to avoid unnecessary re-renders
  // It takes the length, numberAllowed, and charAllowed as dependencies
  // It uses the useEffect hook to call the PasswordGenerator function whenever the dependencies change
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";   // Add numbers to the string
    if (charAllowed) str += "!@#$%^&*(){}";   // Add special characters to the string

    // Generate a random password of the specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);   // Copy the password to the clipboard
    PasswordRef.current?.select();                    // Select the password input field
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center mb-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            ref={PasswordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label  htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label  htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
