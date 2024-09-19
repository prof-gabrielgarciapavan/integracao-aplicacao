import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { RenameTableName1726786463706 } from "./migration/1726786463706-RenameTableName"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "050900",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
        User
    ],
    migrations: [
        RenameTableName1726786463706
    ],
    subscribers: [],
})
