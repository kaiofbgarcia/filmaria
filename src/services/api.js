import axios from "axios";

//Base da URL : https://api.themoviedb.org/3/
//URL da API : https://api.themoviedb.org/3/movie/now_playing?api_key=fe038d8631c1336a9d85cea906f107fe&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
