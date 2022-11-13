import { useState } from "react";
import Button from "../components/Button";
import styles from "../styles/Calculadora.module.css";

export default function Calculadora() {
  const DEFAULT_DISPLAY_VALUE = ""
  const [equation, setEquation] = useState(DEFAULT_DISPLAY_VALUE) 
  const buttonLabels = [
    "x²", "√", "C", "/",
    7, 8, 9, "x",
    4, 5, 6, "-",
    1, 2, 3, "+",
    "±", 0, ",", "=" 
  ];

  const handleButtonClick = (label: string | number) => {
    switch (label) {
      case "C":
        setEquation(DEFAULT_DISPLAY_VALUE)
        break;
      case "=":
        console.log("TODO - EVALUATE FUNCTION")
        break;
      default:
        setEquation(equation.concat(label.toString()))
    }
  }

  console.log(equation)

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}><span>{equation}</span></div>
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