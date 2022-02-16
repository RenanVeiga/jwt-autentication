import { Column, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';


export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username: string

    @Column()
    password:string
}


