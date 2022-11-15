import Image from "next/image"
import styles from "../styles/CadastroDIO.module.scss"
import dioLogo from "../imgs/DIO.svg" 

export default function CadastroDIO() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="https://dio.me" target="_blank">
          <Image src={dioLogo} alt="DIO logo" height={24} />
        </a>
        <div className={styles.links}>
          <a className={styles.homeLink} href="#">Home</a>
          <a className={styles.buttonLink} href="#">Entrar</a>
          <a className={styles.buttonLink} href="#">Cadastrar</a>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.mainHalf}>
          <p className={styles.description}>
            A plataforma para você aprender com experts a dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </p>
        </div>

        <div className={styles.mainHalf}>
          <form className={styles.form}>
            <h1 className={styles.formHeader}>Comece agora grátis</h1>
            <p>Crie sua conta e make the change._</p>
            <div className={styles.inputWrapper}>
              <svg className={styles.icon} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"   height="1em" width="1em">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              </svg>
              <input className={styles.input} placeholder="Nome Completo"></input>
            </div>
            <div className={styles.inputWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   height="1em" width="1em">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <input className={styles.input} placeholder="E-mail"></input>
            </div>
            <div className={styles.inputWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   height="1em" width="1em">
                <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"></path>
              </svg>
              <input className={styles.input} placeholder="Password"></input>
            </div>
            <button className={styles.formButton}>Criar minha conta</button>
            <p>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </p>
            <strong className={styles.strong}>
              Já tenho conta. <a href="#" className={styles.greenText}>Fazer login</a>
            </strong>
          </form>
        </div>
      </main>


    </div>
  )
}