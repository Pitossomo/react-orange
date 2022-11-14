import { useState } from "react"
import styles from "../styles/GithubWiki.module.css"
import {api} from '../services/githubAPI'
import githubLogo from '../imgs/github.png'
import Image from "next/image"

type Repository = {
  name: string,
  url: string,
  author: string
} 

export default function GihubWiki () {
  const [repos, setRepos] = useState<Repository[]>([])
  const [currentRepo, setCurrentRepo] = useState<string>('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentRepo(e.currentTarget.value)
  }

  const handleSearch = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    
    if(data.id) {
      setRepos(prev => [...prev, data])
    }
  }

  const handleRemove = () => {
    console.log("removed")
  }

  return (
    <div className={styles.container}>
      <>
        <Image src={githubLogo} alt="githubLogo" height={72} />
        <input className={styles.input} value={currentRepo} onChange={handleChange} />
        <button className={styles.searchBtn} onClick={handleSearch}>Buscar</button>

        { repos.map(repo => (
          <div key={repo.name}>
            <h1>{repo.name}</h1>
            <a href={repo.url}>{repo.url}</a>
            <p>{repo.author}</p>
            <hr />
          </div>
        ))}
      </>
    </div>
  )
}