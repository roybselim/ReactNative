import { SQLiteDatabase, Transaction, ResultSet } from "react-native-sqlite-storage";
import {IItem} from './interfaces';

export default class DatabaseHelper {
    public createProductTable(db: SQLiteDatabase): Promise<string>{
        const query: string = 'CREATE TABLE IF NOT EXISTS Product (id, item, cost)';
        const message: string = 'Product table successfully created';
        return this.executeSql(db, query, message);
    }

    public dropProductTable(db: SQLiteDatabase): Promise<string> {
        const query: string = 'DROP TABLE IF EXISTS Product';
        const message: string = 'Product table successfully deleted';
        return this.executeSql(db, query, message);
    } 

    public addProduct(db:SQLiteDatabase, prod: IItem):Promise<ResultSet>{
        return new Promise((resolve, reject) => {
            db.transaction((tx:Transaction) => {
                tx.executeSql(
                    'INSERT INTO Product VALUES (?, ?, ?)', 
                    [prod.id, prod.item, prod.cost]
                ).then(([tx, results]) => {
                    resolve(results);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    public listProducts(db:SQLiteDatabase): Promise<IItem[]>{
        return new Promise((resolve, reject) => {
            const products: IItem[] = [];
            db.transaction((tx: Transaction) => {
                tx.executeSql('SELECT p.id, p.item, p.cost FROM Product p').then(([tx, results]) => {
                    var len: number = results.rows.length;
                    for(let i = 0; i < len; i++){
                        let row: IItem = results.rows.item(i);
                        const { id, item, cost } = row;
                        products.push({id,item,cost});
                    }
                    resolve(products);
                }).catch(err1 => reject(err1));
            });
        });
    }

    private executeSql(db:SQLiteDatabase, query: string, message: string):Promise<string>{
        return new Promise((resolve, reject) => {
            db.transaction((tx:Transaction) => {
                tx.executeSql(query)
            }).then(() => {
                resolve(message);
            }).catch(err => reject(err));
        });        
    }
}