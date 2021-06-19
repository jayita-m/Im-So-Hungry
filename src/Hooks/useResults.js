import { useState } from "react";
import Spoonacular from "../API/Spoonacular";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try{

            searchTerm = JSON.stringify(searchTerm);

            const response = await Spoonacular.get('/findByIngredients', {
                params: {
                    apiKey: 'a8fe8ce8285e474c9fa221feed8de59d',
                    ingredients: searchTerm,
                    number: 20,
                    ranking: 1
                    //ignorePantry: true
                }
            });
            setResults(response.data);
            //console.log(results);
        }

        catch (e) {
            setErrorMessage("Something went wrong!");
        }
    };

    return [searchApi, results, errorMessage];

};
