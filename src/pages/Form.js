import "./Form.css"
import {useState} from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {
    const [movieTitle, setMovieTitle] = useState("")
    const [movieAge, setMovieAge] = useState(null)
    const [movieTime, setMovieTime] = useState(null)

    const submitForm = async (event) => {
        event.preventDefault()

        const newMovie = {title: movieTitle, minage: parseInt(movieAge), time: parseInt(movieTime)}

        try {
            await projectFirestore.collection("movies").add(newMovie)
            setMovieTitle("")
            setMovieAge("")
            setMovieTime("")
        }catch(err){
            console.log(err.message)
        }
    }

  return <section className="form-section" >
    <h1>Přidání filmů</h1>
    <form onSubmit={submitForm}>
        <input className="input" type="text" placeholder="Název filmu" onChange={(e) => setMovieTitle(e.target.value)} value={movieTitle} />
      <input className="input" type="number" placeholder="Minimální věk" onChange={(e) => setMovieAge(e.target.value)} min="1" value={movieAge} />
      <input className="input" type="number" placeholder="Čas filmu" onChange={(e) => setMovieTime(e.target.value)} min="1" value={movieTime} />
        <input type="submit" value="Přidat film" />
    </form>
  </section>
}

export default Form