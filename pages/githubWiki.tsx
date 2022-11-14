import { useState } from "react"
import styles from "../styles/GithubWiki.module.css"
import {api} from '../services/githubAPI'
import githubLogo from '../imgs/github.png'
import Image from "next/image"

type Repository = {
  id: string,
  full_name: string,
  html_url: string,
  author: string
} 

export default function GihubWiki () {
  const [repos, setRepos] = useState<Repository[]>([])
  const [currentRepo, setCurrentRepo] = useState<string>('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentRepo(e.currentTarget.value)
  }

  const handleSearch = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`)
      
      const isRepoOnScreen = repos.find(repo => repo.id === data.id)
      if (isRepoOnScreen) {
        alert("Repo already on screen")
        return;
      }
  
      setRepos(prev => [...prev,
        {
          id: data.id,
          full_name: data.full_name,
          html_url: data.html_url,
          author: data.author
        }
      ])
      setCurrentRepo("")  
    } catch (error) {
      alert("Error. Repository not found")
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
          <div key={repo.full_name}>
            <h1>{repo.full_name}</h1>
            <p></p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">{repo.html_url}</a>
            <p>{repo.author}</p>
            <hr />
          </div>
        ))}
      </>
    </div>
  )
}