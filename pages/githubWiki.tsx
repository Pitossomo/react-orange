import { useState } from "react"
import styles from "../styles/GithubWiki.module.css"
import {api} from '../services/githubAPI'
import githubLogo from '../imgs/github.png'
import Image from "next/image"
import Alert from "../components/GithubWiki/Alert"

type Repository = {
  id: string,
  name: string,
  full_name: string,
  html_url: string,
} 

export default function GihubWiki () {
  const [repos, setRepos] = useState<Repository[]>([])
  const [currentRepo, setCurrentRepo] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentRepo(e.currentTarget.value)
  }

  const handleSearch = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`)
      
      const isRepoOnScreen = repos.find(repo => repo.id === data.id)
      if (isRepoOnScreen) {
        setErrorMessage("Repositório já consta na lista")
        return;
      }

      console.log(data)

      setRepos(prev => [...prev, data])
      setCurrentRepo("")
      setErrorMessage("")
    } catch (error) {
      setErrorMessage("Repositório não encontrado")
    }    
  }

  const handleRemove = (id:string) => {
    setRepos(prev => prev.filter(repo => repo.id !== id))
    setErrorMessage("")
  }

  return (
    <div className={styles.container}>
      <>
        <h1>Busca de repositórios no GitHub</h1>
        <Image className={styles.logo} src={githubLogo} alt="githubLogo" height={72} />
        <input className={styles.input} value={currentRepo} onChange={handleChange} placeholder="Digite user/repo" />
        <button className={styles.searchBtn} onClick={handleSearch}>Buscar</button>

        <Alert message={errorMessage} setMessage={setErrorMessage} />

        { repos.map(repo => (
          <div className={styles.repository} key={repo.full_name}>
            <h2 className={styles.name}>{repo.name}</h2>
            <p className={styles.full_name}>{repo.full_name}</p>
            <a className={styles.seeRepo} href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
            <a className={styles.removeRepo} href="#" onClick={e => handleRemove(repo.id)}>Remover</a>
          </div>
        ))}
      </>
    </div>
  )
}