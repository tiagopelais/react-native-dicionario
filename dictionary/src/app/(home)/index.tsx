import Button from '@/src/components/ui/Button';
import Words from '@/src/components/Words';
import { BottomView, Menu, SafeAreaView, Title, TopView } from '@/src/constants/Style';
import { useWordDatabase } from '@/src/database/useWordDatabase';
import { WordDatabase } from '@/types/WordDatabse';
import { useEffect, useState } from 'react'
import { Alert, FlatList, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function HomeScreen() {

    const [title, setTitle] = useState<string>('Word List');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<WordDatabase[]>();

    const wordDatabase = useWordDatabase();

    const setCurrentTitle = (title: string) => {
        setTitle(title)
    }

    async function getData(){
        try{
            const value =  await AsyncStorage.getItem(`${process.env.EXPO_PUBLIC_STORAGE_KEY}-preloaded`);
            if(value != null){
                list();
            }else{
                preload();
            }
        } catch{
            console.log('an error occured while checking storage')
        }}
       

    async function preload() {
        try{
            setIsLoading(true);
            const response = await wordDatabase.preloadDatabase().then(() => list());
        }catch(error){
            Alert.alert('Attention', 'An error occurred while executing Preload');
        } finally{
            setIsLoading(false)
            await AsyncStorage.setItem(`${process.env.EXPO_PUBLIC_STORAGE_KEY}-preloaded`, 'true')
        }
        
      }

    async function list() {
        try {
            const response = await wordDatabase.list();
            setData(response);
        } catch (error) {
            Alert.alert('Attention', 'An error occurred while requesting words!')
        }
    }

    useEffect(() => {
        getData();
    },[])

    

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
                {
                    isLoading 
                    ? 
                        <><View><Text>Loading words ... </Text></View></>
                    : <FlatList
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-evenly',  flexWrap: 'wrap'}}
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Words label={item.word} id={item.id} />}

                />
                }
                
            </BottomView>
        </SafeAreaView>

    )
}