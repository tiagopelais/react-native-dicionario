import { type SQLiteDatabase} from 'expo-sqlite'

export async function initializeDatabase(database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS words (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word TEXT NOT NULL
        )
    `)

    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS favorites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word TEXT NOT NULL    
        )    
    `)

    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word TEXT NOT NULL    
        )    
    `)

}