import styles from "../styles/Calculadora.module.css";

export default function Calculadora() {
  const buttonLabels = [
    "x²", "√", "C", "/",
    7, 8, 9, "x",
    4, 5, 6, "-",
    1, 2, 3, "+",
    "±", 0, ",", "=" 
  ];

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}></div>
        {
          buttonLabels.map(label => (
            <button>{label}</button>
          ))
        }
      </div>
    </div>
  )
}