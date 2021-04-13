import React, { useState } from "react";
import RomanTable from "../components/romanTable";

import {
  ALPHA_NUMERIC_INPUT_ERROR,
  INPUT_RANGE_ERROR,
  INVALID_INPUT_ERROR,
} from "../helpers/constants";
import { convertToRoman, convertFromRoman } from "../helpers/converters";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    let input = e.target.value;
    let numeric_alpha = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    let numeric = /^\d+$/;
    let alpha = /^[a-z]+$/i;

    //Validation of the input

    // check if input is not empty
    if (input.length) {
      //check if the input is alphanumeric, is yes then show error
      if (input.match(numeric_alpha)) {
        setError(ALPHA_NUMERIC_INPUT_ERROR);
        setOutput("");

        //check if the input is integer
      } else if (input.match(numeric)) {
        //if the integer is greater than 3999, show error.
        if (parseInt(input) > 3999) {
          setError(INPUT_RANGE_ERROR);
          setOutput("");
        }

        //if not, convert it to Roman numerals
        else {
          setOutput(convertToRoman(input));
          setError(null);
        }

        //check if the input contains roman letters, if yes convert it to integres
      } else if (input.match(alpha)) {
        setOutput(convertFromRoman(input));
        setError(null);

        //if input contains any special characters, show error
      } else {
        setError(INVALID_INPUT_ERROR);
        setOutput("");
      }

      //if input is empty
    } else {
      setError(null);
      setOutput("");
    }
  };

  return (
    <div className="App">
      <h1>Roman Numeral Converter</h1>
        <input
          onChange={handleInput}
          placeholder="Enter your input"
        />
        <h2>{output}</h2>
        <h4 className="error">{error}</h4>
        <RomanTable />
    </div>
  );
}

export default App;
