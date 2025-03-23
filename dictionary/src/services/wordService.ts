import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

export function WordService() {
    const instance = Axios.create();
    const axios = setupCache(instance);

    async function getMeaning(word: string) {
        
        try {
            const req = axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            const [result] = await Promise.all([req]);
            return req;

        } catch (error) {
            throw error
        }
    }

    return { getMeaning }
}