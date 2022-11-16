import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from "../styles/Login.module.scss"
import InputWrapper from "../components/Login/InputWrapper";
import Head from "next/head";

const schema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Campo obrigatório')
}).required()

export default function Login () {
  const { register, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  console.log(errors)

  return (
    <div className={styles.container}>
      <Head>
        <title>Orange Tech + | Login Example Page</title>
      </Head>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <InputWrapper 
          placeholder='Usuário'
          name='email'
          register={register}
          errors = {errors} 
        />
        <InputWrapper 
          placeholder='Senha'
          name='password'
          register={register}
          errors = {errors} 
        />
        <button className={styles.button}>Entrar</button>
      </form>
    </div>
  )
}