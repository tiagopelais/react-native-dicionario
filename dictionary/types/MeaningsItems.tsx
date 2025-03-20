export type MeaningsItemsProps = {
    partOfSpeech: string;
    definitions: Definitions[];

}

type Definitions = {
    definition: string,
    example: string,
    synonyms: [],
    antonyms: []
}