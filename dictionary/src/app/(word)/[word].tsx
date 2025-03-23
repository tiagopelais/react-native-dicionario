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


export default function WordScreen() {

    const { word } = useLocalSearchParams<{ word: string }>();

    const [favorite, setFavorite] = useState<boolean>(false);
    const [data, setData] = useState<MeaningsItemsProps>()

    const wordService = WordService();

    async  function getMeaning(){
        try{
            const result = await wordService.getMeaning(word).then();
            setData(result.data[0])

        }catch(error: any){
           Alert.alert("No Definitions Found", "Sorry pal, we couldn't find definitions for the word you were looking for");
           goBack()
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
        getMeaning()
    }, [])

   
    return (
        <SafeAreaView>
            <TopView>
                <MainCard>
                    <Title>{word}</Title>
                </MainCard>
            </TopView>
            <Favorite onPress={() => saveFavorite()}>
                {
                    favorite ? <IconSymbol name="star" color='#FAD13F' /> : <IconSymbol name="star.fill" color='#FAD13F' />
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