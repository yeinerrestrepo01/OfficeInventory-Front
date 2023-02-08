import axios from "axios"

export const getLibros  =()=> {
    return axios.get('https://localhost:7014/api/Libros');
}