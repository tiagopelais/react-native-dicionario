export type MeaningsItemsProps = {
    word: string,
    phonetic: string,
    meanings: Meanings[],
    partOfSpeech: string;

}
type Meanings = {
    partOfSpeech: string,
    definitions: Definitions[]
}
type Definitions = {
    definition: string,
    example: string,
    synonyms: [],
    antonyms: []
}