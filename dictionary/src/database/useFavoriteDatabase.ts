import { WordDatabase } from "@/types/WordDatabse";
import { useSQLiteContext } from "expo-sqlite"

export function useFavoriteDatabase(){

    const database = useSQLiteContext();

    async function create(data: Omit<WordDatabase, "id">){

        const statement = await database.prepareAsync(
            "INSET INTO favorites (word) VALUES (word)"
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

    async function remove(id: number){
        try{
            const query = "DELETE FROM favorites WHERE id ?";

            const response = await database.getAllAsync<WordDatabase>(query, id);

            return response;
        }catch(error){
            throw error
        }

    }

    return {}
}