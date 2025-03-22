import { useLocalSearchParams } from "expo-router";

import { useState } from "react";

import { router } from 'expo-router'
import { SafeAreaView, ScrollView } from "react-native";
import MeaningsItems from "@/src/components/MeaningsItem";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import { TopView, MainCard, Title, Favorite, BottomView, WordCard, TextWordCard, MenuBottom } from "@/src/constants/Style";
import Button from "@/src/components/ui/Button";


export default function WordScreen() {

    const [favorite, setFavorite] = useState<boolean>(false);

    const saveFavorite = () => {
        setFavorite(!favorite);
    }

    const goBack = () => {
        router.replace('/')
    }

    const next = () => {
        console.log(`next word`)
    }

    const { word } = useLocalSearchParams<{ word: string }>();
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
                        <TextWordCard>hello</TextWordCard>
                        <TextWordCard>həˈləʊ</TextWordCard>
                    </WordCard>
                    <Title>Meanings</Title>
                    <ScrollView>
                        <MeaningsItems partOfSpeech={"exclamation"} definition={"used as a greeting or to begin a phone conversation."} example={"hello there, Katie!"} />
                        <MeaningsItems partOfSpeech={"noun"} definition={"an utterance of ‘hello’; a greeting."} example={"she was getting polite nods and hellos from people"} />
                        <MeaningsItems partOfSpeech={"verb"} definition={"say or shout ‘hello’."} example={"I pressed the phone button and helloed"} />
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