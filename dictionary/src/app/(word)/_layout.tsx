
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import { Link, Stack } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";

export default function WordLayout() {
    return (
        <Stack>
            <Stack.Screen name="[word]" options={{
                headerShown: true,
                headerTitle: '',
                headerLeft: (props) => (
                    <Link href='/' asChild>
                        <Pressable>
                            <IconSymbol name="arrow.backward" color='#7c7eb9' />
                        </Pressable>
                    </Link>
                ),
            }}
            />
        </Stack>
    )
}