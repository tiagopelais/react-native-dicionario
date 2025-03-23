import { WordDatabase } from "@/types/WordDatabse";
import { useSQLiteContext } from "expo-sqlite"

export function useFavoriteDatabase(){

    const database = useSQLiteContext();

    async function create(data: Omit<WordDatabase, "id">){

        const statement = await database.prepareAsync(
            "INSERT INTO favorites (word) VALUES ($word)"
        )

        try{
            const result = await statement.executeAsync({
                $word: data.word
            })

        }catch(error){
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function list(){
        try{
            const query = "SELECT id, word FROM favorites";

            const response = await database.getAllAsync<WordDatabase>(query);

            return response;
        }catch(error){
            throw error
        }

    }

    async function getByWord(word: string){
        try{
            const query = "SELECT * FROM favorites WHERE word = ?";
            const response = await database.getFirstAsync<WordDatabase>(query, word);

            return response
        }catch(error){
            throw error
        }
    }

    async function remove(id: number){
        try{
            const query = `DELETE FROM favorites WHERE id = ${id}`;

            const response = await database.execAsync(query);

            return response;
        }catch(error){
            throw error
        }

    }

    return { create, list, remove, getByWord }
}