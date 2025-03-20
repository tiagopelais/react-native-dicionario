import { Text } from "react-native";
import { IconSymbol, IconSymbolName } from "./IconSymbol";
import { ButtonMenu } from "@/constants/Style";

export default function Button(
    { label, icon, iconLeft = true, color, onPress }: { label: string, icon: IconSymbolName, iconLeft?: boolean, color: string, onPress: any }) {
    return (
            <ButtonMenu onPress={onPress} style = {{ backgroundColor: color}}>
                {
                    iconLeft 
                        ? <><IconSymbol name={icon} color='#7c7eb9' size={20} style={{marginRight : 10}} /><Text style={{ color: '#7c7eb9' }}>{label}</Text></>
                        : <><Text style={{ color: '#7c7eb9', marginRight: 10 }}>{label}</Text><IconSymbol name={icon} color='#7c7eb9' size={20} /></>
                }
            </ButtonMenu>

    )
}