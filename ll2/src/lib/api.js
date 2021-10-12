import axios from "axios";
import { key } from "./key";

export const fetchData = async (q) => {
    const data = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?chart=mostPopular&maxResults=12&q=${q}&key=${key}`
    );
    console.log(data);
    return data;
};
