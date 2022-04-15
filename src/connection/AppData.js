import { DataSource } from "typeorm";

const AppData = new DataSource({

    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123456",
    "database": "back_react",
    "synchronize": false,
    "entities": [
        "src/model/*{.ts,.js}"]

})

AppData.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch(() => {
        console.error("Error during Data Source initialization")
    })


module.exports = AppData;