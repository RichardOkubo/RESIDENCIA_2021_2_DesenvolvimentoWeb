import axios from "axios";

const api = axios.create({
    // baseURL: "https://ecommerce-serratec-grupo1.herokuapp.com/api/v1/"
    /* TODO: retirar o '/' no final da URL abaixo */
    baseURL: "http://ecommerce-residencia.herokuapp.com/"
    // https://ecommerce-residencia.herokuapp.com/swagger-ui.html
})

export default api;