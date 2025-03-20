import { useState } from 'react'
import Button from '@/components/ui/Button'
import Words from '@/components/Words'
import { BottomView, ListWords, Menu, SafeAreaView, Title, TopView } from '@/constants/Style'


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