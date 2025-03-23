import { useLocalSearchParams } from "expo-router";

import { useEffect, useState } from "react";

import { router } from 'expo-router'
import { Alert, SafeAreaView, ScrollView } from "react-native";
import MeaningsItems from "@/src/components/MeaningsItem";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import { TopView, MainCard, Title, Favorite, BottomView, WordCard, TextWordCard, MenuBottom } from "@/src/constants/Style";
import Button from "@/src/components/ui/Button";
import { WordService } from "@/src/services/wordService";
import { MeaningsItemsProps } from "@/types/MeaningsItems";
import { useFavoriteDatabase } from "@/src/database/useFavoriteDatabase";
import { useHistoryDatabase } from "@/src/database/useHistoryDatabase";
import { WordDatabase } from "@/types/WordDatabse";


export default function WordScreen() {

    const { word } = useLocalSearchParams<{ word: string }>();

    const [favorite, setFavorite] = useState<boolean>(false);
    const [data, setData] = useState<MeaningsItemsProps>()
    const [myFavorite, setMyFavorite] = useState<WordDatabase>();

    const wordService = WordService();
    const favoritesDatabase = useFavoriteDatabase();
    const historyDatabase = useHistoryDatabase();

    async  function getMeaning(){
        try{
            const result = await wordService.getMeaning(word);
            setData(result.data[0])

        }catch(error: any){
           Alert.alert("No Definitions Found", "Sorry pal, we couldn't find definitions for the word you were looking for");
           goBack()
        }
    }

    async function alreadyFavorite(){
        try{
            const result = await favoritesDatabase.getByWord(word);
            if(result){
                setMyFavorite(result);
                setFavorite(true)
            }
            

        }catch(error){
            Alert.alert('Attention', 'an error occurred while trying to get favorites')
        }
    }

    async function isFavorite(){
        try{
            const result = await favoritesDatabase.create({word});
            setFavorite(true);
        }catch(error){
            Alert.alert('Attention', 'an error occurred while trying to mark Favorite')
        }
    }

    async function isNotFavorite(id: number){
        try{
            const result = await favoritesDatabase.remove(id);
            setFavorite(false);

        }catch(error){
            Alert.alert('Attention', 'an error occurred while trying to uncheck Favorite')
        }
    }

    async function setHistory(){
        try{
            const result = await historyDatabase.create({word});

        }catch(error){
            Alert.alert('Attention', 'an error occurred while trying to save history')
        }
    }

    const saveFavorite = () => {
        setFavorite(!favorite);
    }

    const goBack = () => {
        router.replace('/')
    }

    const next = () => {
        console.log(`next word`)
    }

    useEffect(() => {
        getMeaning();
        setHistory();
        alreadyFavorite();
    }, [])

   
    return (
        <SafeAreaView>
            <TopView>
                <MainCard>
                    <Title>{word}</Title>
                </MainCard>
            </TopView>
            <Favorite onPress={() => myFavorite?.id ? isNotFavorite(myFavorite?.id) : isFavorite() }>
                {
                    favorite ? <IconSymbol name="star.fill" color='#FAD13F' />  : <IconSymbol name="star" color='#FAD13F' />
                }
            </Favorite>
            <BottomView>
                <MainCard>
                    <WordCard>
                        <TextWordCard>{data?.word}</TextWordCard>
                        <TextWordCard>{data?.phonetic}</TextWordCard>
                    </WordCard>
                    <Title>Meanings</Title>
                    <ScrollView>
                        
                        <MeaningsItems partOfSpeech={data?.meanings[0].partOfSpeech} definition={data?.meanings[0].definitions[0].definition} example={data?.meanings[0].definitions[0].example} />
              
                    </ScrollView>

                    <MenuBottom>
                        <Button color="#FAD13F" icon="return.left" label={"Voltar"} onPress={() => goBack()} />
                        <Button color="#FAD13F" icon="arrow.right" label={"Proximo"} onPress={() => next()} iconLeft={false} />
                    </MenuBottom>

                </MainCard>
            </BottomView>
        </SafeAreaView>
    )
}