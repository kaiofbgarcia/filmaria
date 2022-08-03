import './favoritos.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Favoritos(){
    
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@kaioflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    return(
        <div className='meusFilmes'>
            <h1>Minha Lista</h1>
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme`}>Ver Detalhes</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;