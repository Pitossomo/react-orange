import styles from "../styles/Alert.module.css"

type AlertProps = {
  message: string,
  setMessage: Function
}

export default function Alert({message, setMessage}:AlertProps) {
  if (!message) return null;
  
  return (
    <div className={styles.alert}>
      <span>{message}</span>
      <span className={styles.close} onClick={e => setMessage("")}>x</span>
    </div>
  )
}