import { Cat } from "src/cats/entities/cat.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";


@Entity()
export class Breed {

    @Column({ primary: true, generated: true})
    id: number;

    @Column({ length:500})
    name: string;

    @OneToMany(()=>Cat, cat => cat.breed)
    cats: Cat[];

    // Agrega esta columna para manejar la eliminación suave
    @DeleteDateColumn()
    deletedAt?: Date
}
