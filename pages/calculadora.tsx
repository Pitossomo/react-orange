import { useState } from "react";
import Button from "../components/Button";
import styles from "../styles/Calculadora.module.css";
import { create, all } from 'mathjs';

const config = { }
const math = create(all, config)

const DEFAULT_DISPLAY_VALUE = "0"
const MAX_EQUATION_LENGTH = 14
const MAX_RESULT_LENGTH = 14
const ERROR_MESSAGE = "ERROR!"

export default function Calculadora() {
  const [equation, setEquation] = useState<string>(DEFAULT_DISPLAY_VALUE)
  const [result, setResult] = useState<string>(DEFAULT_DISPLAY_VALUE)

  const scope = {"Res": result}
  
  const buttonLabels = [
    "x²", "√", "C", "/",
    7, 8, 9, "x",
    4, 5, 6, "-",
    1, 2, 3, "+",
    "Res", 0, ".", "=" 
  ];

  function handleButtonClick(label: string | number) {
    if (label === "C") {
      setResult(DEFAULT_DISPLAY_VALUE);
      setEquation(DEFAULT_DISPLAY_VALUE);
      return;
    }
    
    if (equation === "0") {
      if (typeof label === "number" || label === "Res") {
        setEquation(label.toString());
      }
      return;
    }

    let newEquation = DEFAULT_DISPLAY_VALUE;
    switch (label) {
      case "√":
        evaluate("sqrt(" + equation + ")");
        break;
      case "x":
        newEquation = (equation + "*");
        break;
      case "x²":
        evaluate(equation + "^2");
        break;
      case "=":
        evaluate(equation);
        break;
      default:
        newEquation = equation.concat(label.toString());
    }

    if (isDisplayBiggerThan(newEquation)) {
      setEquation(newEquation)
    }
  }

  function isDisplayBiggerThan(newEquation: string): boolean {
    return (newEquation.length <= MAX_EQUATION_LENGTH);
  }

  function evaluate(equation: string): void {
    let result, newEquation = DEFAULT_DISPLAY_VALUE;
    try {
      result = math.evaluate(equation, scope).toString();
    } catch (error) {
      result = ERROR_MESSAGE
      newEquation = ERROR_MESSAGE
    } finally {
      setEquation(newEquation)
      setResult(result);
    }
  }

  let resultToDisplay = Number(result)
    ? +(parseFloat(Number(result).toPrecision(MAX_RESULT_LENGTH)))
    : result

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>
          <p className={styles.equation}>{equation}</p>
          <p className={styles.result}>
            <span>Res = </span>
            <span>{resultToDisplay}</span>
          </p>
        </div>
        {
          buttonLabels.map(label => (
            <Button key={label}
              handleClick={handleButtonClick}
              label={label}
            />
          ))
        }
      </div>
    </div>
  )
}