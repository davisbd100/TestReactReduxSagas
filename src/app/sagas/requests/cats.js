import axios from "axios";

export function getNewCatFact() {
    return axios.get('https://meowfacts.herokuapp.com')
}