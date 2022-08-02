import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

//https://api.themoviedb.org/3/movie/now_playing?api_key=fe038d8631c1336a9d85cea906f107fe&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "fe038d8631c1336a9d85cea906f107fe",
                    language: "pt-BR",
                    page: 1,
                }
            })
            //console.log(response.data.results.slice(0, 5));
            setFilmes(response.data.results.slice(0, 10))

        }

        loadFilmes();

    }, [])

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                            </strong>
                            <img className="poster" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}  alt="Poster do Filme"/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link> 
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;