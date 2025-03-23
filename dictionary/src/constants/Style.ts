import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
    background-color: #FFF;
`;

export const TopView = styled.View`
    min-height : 10%;
    background-color : #FFF; 
`;

export const BottomView = styled.View`
    
    padding : 10px;
    background-color : #7c7eb9;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height : 90%;
    
`;

export const Menu = styled.View`
    flex-direction : row;
    justify-content : space-evenly;
    gap: 20px;
`;

export const ButtonMenu = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    flex:1;
   
`;

export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 10px;
`;

export const ListWords = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    
`
export const Word = styled.TouchableOpacity`
    background-color: #FFF;
    padding: 10px;
    border-radius: 4px;
    min-width: 30%;
    margin: 1%;
    justify-content: center;
    align-items: center;
`;

export const Favorite = styled.TouchableOpacity`
    background-color: #FFF;
    position: absolute;
    top: 50px;
    right: 50px;
    border: 1px solid #FAD13F;
    border-radius: 30px;
    padding: 10px;
    width: 50px;
    align-items: center;
    z-index:9;
`;

export const MainCard = styled.View`
    flex:1;
    margin: 20px 30px 0 30px;
`;

export const WordCard = styled.View`
    background-color: #6265ab;
    padding: 30px;
    align-items: center;
    gap: 30px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-bottom: 20px
`;

export const MenuBottom = styled.View`
    flex-direction: row;
    justify-content : space-evenly;
    gap: 20px;
    position: absolute;
    bottom: 50px;
`;

export const TextWordCard = styled.Text`
    font-weight: 800;
    font-size: 18px
`

export const EgText = styled.Text`
    font-style: italic;
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const PartOfSpeech = styled.Text`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
    
`;