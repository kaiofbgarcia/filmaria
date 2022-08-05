import './favoritos.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Favoritos(){
    
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@kaioflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme)=>{
            return (filme.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@kaioflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso!");
    }

    return(
        <div className='meus-filmes'>
            <h1>Minha Lista</h1>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo...</span>}
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}  alt={filme.title}/>
                            <span>{filme.title}</span>
                            <div className="area-buttons-fav">
                                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                                <button onClick={()=> excluirFilme(filme.id)} class="noselect"><span class="text">Excluir</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;