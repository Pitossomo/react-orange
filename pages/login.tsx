
import { useForm } from "react-hook-form"
import styles from "../styles/Login.module.scss"

export default function Login () {
  const { 
    register,
    watch,
    formState: {errors, isValid },
  } = useForm()

  const form = watch()
  console.log(form)

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input 
          className={styles.input}
          placeholder="Usuário"
          {...register("email")}
        />
        <input
          className={styles.input}
          placeholder="Senha"
          type="password"
          {...register("password")}
        />
        <button className={styles.button}>Entrar</button>
      </form>
    </div>
  )
}