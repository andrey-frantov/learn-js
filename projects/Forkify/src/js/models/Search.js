import axios from "axios";
import {key0, key1} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key1}&q=${this.query}`);
            this.result = res.data;

        } catch (err) {
            console.log(err);
        }

    }
}