import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: "Tabela_Usuario"
})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: "primeiro_nome",
    })
    firstName: string

    @Column({
        type: "varchar",
        length: 50,
    })
    lastName: string

    @Column()
    age: number

}
