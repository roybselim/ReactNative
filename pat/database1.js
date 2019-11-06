import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "POSoffline.db";
const database_version = "1.0";
const database_displayname = "POS React Offline Database";
const database_size = 200000;

export default class Database {
    initDB() {
        let db;
        return new Promise((resolve) => {
          // console.log("Plugin integrity check ...");
          SQLite.echoTest()
            .then(() => {
              // console.log("Integrity check passed ...");
              // console.log("Opening database ...");
              SQLite.openDatabase(
                database_name,
                database_version,
                database_displayname,
                database_size
              )
                .then(DB => {
                  db = DB;
                  // console.log("Database OPEN");
                  db.executeSql('SELECT 1 FROM Product LIMIT 1').then(() => {
                      // console.log("Database is ready ... executing query ...");
                      resolve(db);
                  }).catch((error) =>{
                      // console.log("Received error: ", error);
                      // console.log("Database not yet ready ... populating data");
                      db.transaction((tx) => {
                          tx.executeSql('CREATE TABLE IF NOT EXISTS Product (id, item, cost)');
                      }).then(() => {
                          // console.log("Table created successfully");
                          resolve(db)
                      }).catch(error => {
                          console.log(error);
                      });
                  });
                  // resolve(db);
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log("echoTest failed - plugin not functional");
            });
          });
      };

      closeDatabase(db) {
        if (db) {
          console.log("Closing DB");
          db.close()
            .then(status => {
              console.log("Database CLOSED");
            })
            .catch(error => {
              console.dir(error);
            });
        } else {
          console.log("Database was not OPENED");
        }
      };

      listProducts() {
        return new Promise((resolve) => {
          const products = [];
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT p.id, p.item, p.cost FROM Product p', []).then(([tx,results]) => {
                // console.log("Query completed");
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  // console.log(`Prod ID: ${row.id}, Prod Name: ${row.item}`)
                  const { id, item, cost } = row;
                  products.push({
                    id,
                    item,
                    cost
                  });
                }
                //console.log(products);
                resolve(products);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      productById(id) {
        console.log(id);
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT * FROM Product WHERE id = ?', [id]).then(([tx,results]) => {
                console.log(results);
                if(results.rows.length > 0) {
                  let row = results.rows.item(0);
                  resolve(row);
                }
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      addProduct(prod) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('INSERT INTO Product VALUES (?, ?, ?)', [prod.id, prod.item, prod.cost]).then(([tx, results]) => {
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      updateProduct(id, prod) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('UPDATE Product SET item = ?, cost = ? WHERE id = ?', [prod.item, prod.cost, id]).then(([tx, results]) => {
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      deleteProduct(id) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('DELETE FROM Product WHERE id = ?', [id]).then(([tx, results]) => {
                console.log(results);
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      deleteTable(){
        return new Promise((resolve) => {
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size
          ).then((db) => {
            db.transaction((tx) => {
              tx.executeSql('DROP TABLE IF EXISTS Product', []).then(([tx, results]) => {
                resolve(db)
              })
            });
          })
        });          
      }
}