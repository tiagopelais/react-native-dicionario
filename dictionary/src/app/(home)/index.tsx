import Button from '@/src/components/ui/Button';
import Words from '@/src/components/Words';
import { BottomView, ListWords, Menu, SafeAreaView, Title, TopView } from '@/src/constants/Style';
import { useState } from 'react'



export default function HomeScreen() {

    const [title, setTitle] = useState<string>('Word List');

    const setCurrentTitle = (title: string) => {
        setTitle(title)
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#FFF' }}>
            <TopView>
                <Menu>
                    <Button onPress={() => setCurrentTitle('Word List')} label='Word List' icon={'list.bullet'} color='#FAD13F' />
                    <Button onPress={() => setCurrentTitle('History')} label='History' icon={'book'} color='#B3E5FF' />
                    <Button onPress={() => setCurrentTitle('Favorites')} label='Favorites' icon={'star'} color='#CEEBC7' />
                </Menu>
            </TopView>
            <Title>{title}</Title>
            <BottomView>
               
                <ListWords>
                    <Words label='hello' />
                    <Words label='Hi' />
                    <Words label='Welcome' />

                </ListWords>

            </BottomView>
        </SafeAreaView>

    )
}