import { useState } from "react"

import styles from "./CreateAnime.module.css"



interface CreateAnimeProps {
  handleCreateAnime: (anime: NewAnimeFormData) => void
}

interface NewAnimeFormData {
  title: string;
  genre: string;
  description: string;
  value: number
}

const CreateAnime: React.FC<CreateAnimeProps> = (props) => {
  const [form, setForm] = useState<NewAnimeFormData>({
    title: '',
    genre: '',
    description: '',
    value: 0
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setForm(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.handleCreateAnime(form)
    setForm({
      title: '',
      genre: '',
      description: '',
      value: 0


    })
  }

  return (
    <main className={styles.body}>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}> Title:</label>
          <input
            className={styles.input}
            type="text"
            value={form.title}
            onChange={handleChange}
            name="title"
            />
      </div>
      <div className={styles.inputContainer}>
        <label>Genre:</label>
        <input 
        className={styles.input}
        type="text"
        value={form.genre}
        onChange={handleChange}
        name="genre"
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Description</label>
        <input
          className={styles.input}
          type="text"
          value={form.description}
          onChange={handleChange}
          name="description"
          />
      </div>
      <div className={styles.inputContainer}>
        <label>Value</label>
        <input
          className={styles.input}
          type="number"
          value={form.value}
          onChange={handleChange}
          name="value"
          />
      </div>
      <button type="submit" className={styles.button}>Create Anime</button>
      </form>
      </div>
    </main>
  )
}

export default CreateAnime