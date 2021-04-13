import React from "react";
import { ROMAN_NUMERALS_KEY_OBJ } from "../helpers/constants";

import "./table.css";

const RomanTable = () => {
  const romanNumerals = ROMAN_NUMERALS_KEY_OBJ;
  return (
    <>
    <h5>Table for reference with some examples</h5>
    <table className="table">
      <thead>
        <tr>
          <th>Roman Numeral</th>
          <th>Integers</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(romanNumerals).map((keyName, i) => (
          <tr key={i}>
            <td>{keyName}</td>
            <td>{romanNumerals[keyName]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default RomanTable;
