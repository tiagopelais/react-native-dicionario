
import { Link, router } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { Word } from '../constants/Style'
export default function Words({ label }: { label: string }) {

    const goToDefiniton = () => {
        router.push(`/(word)/${label}`)
    }
    
    return (
        <Word onPress={() => goToDefiniton()}>
            <Text>{label}</Text>
        </Word>
    )
}