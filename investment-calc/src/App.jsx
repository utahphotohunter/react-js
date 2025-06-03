import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  let inputIsValid;
  if (userInput.duration >= 1) {
    inputIsValid = true;
  }

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleChange} dataInput={userInput}/>
      {inputIsValid ? <Results input={userInput}/> : <p className="center">Please enter a duration greater than 1.</p>}
    </>
  );
}

export default App;
