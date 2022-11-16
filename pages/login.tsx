
import styles from "../styles/Login.module.scss"

export default function Login () {

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input className={styles.input} placeholder="Usuário" />
        <input className={styles.input} placeholder="Senha" type="password" />
        <button className={styles.button}>Entrar</button>
      </form>
    </div>
  )
}