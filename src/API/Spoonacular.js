import axios from "axios";

export default axios.create({

    baseURL: 'https://api.spoonacular.com/recipes',
    headers: {
        Authorization : 'Bearer a8fe8ce8285e474c9fa221feed8de59d'
    }
}); 