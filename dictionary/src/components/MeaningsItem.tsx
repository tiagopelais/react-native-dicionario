import { EgText, PartOfSpeech } from "../constants/Style";
import { View } from "react-native";

export default function MeaningsItems({
    partOfSpeech, definition, example
}: {
    partOfSpeech: string, definition: string, example: string
}) {
    return (
        <View>
            <PartOfSpeech>{partOfSpeech} - {definition}</PartOfSpeech>
            <EgText>E.g - {example}.</EgText>
        </View>
    )

}