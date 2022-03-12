import React from "react";
import axios from 'axios';
import { useState } from "react";

const fetchFact = () => {

    return axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(({ data }) => {
        // console.log(data);

        return data.value;
    })
    .then((err) => {
        console.error(err)
    })

}

const Quotes = () => {

    const [quote, setQuote] = useState('');
    const [nextQuote, setNextQuote] = useState('');

    return(
        <div>
            <button
                onClick={() => {
                    fetchFact(setQuote);
                }}
            >Click for Chuck Norris Facts</button>
            <p>{quote}</p>
        </div>
    )
}

export default Quotes;