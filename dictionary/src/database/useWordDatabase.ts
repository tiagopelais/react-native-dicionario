import { WordDatabase } from "@/types/WordDatabse";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";

import wordsToJson from '../database/words_dictionary_test.json'

export function useWordDatabase() {

    const [words, setWords] = useState(Object.keys(wordsToJson));
    const database = useSQLiteContext();

    async function preloadDatabase() {

        const statement = await database.prepareAsync(
            "INSERT INTO words (word) VALUES ($word)"
        )

        try {
            words.map(async (word) => {
                await statement.executeAsync({
                    $word: word
                })
            });
            return true;
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function list() {
        try {
            const query = "SELECT id, word FROM words";

            const response = await database.getAllAsync<WordDatabase>(query);

            return response;
        } catch (error) {
            throw error
        }

    }

    return { preloadDatabase, list }
}