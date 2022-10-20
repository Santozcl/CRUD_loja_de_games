import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'db_categoria'})
export class Categoria{
   
 @PrimaryGeneratedColumn()
 id: number
 
 @IsNotEmpty()
 @Column({length:100, nullable: false})
 Faixetaria: string

 @IsNotEmpty()
 @Column({length:100, nullable: false})
 icone: string

 @IsNotEmpty()
 @Column({length: 100 ,nullable: false})
 marca: string

 @OneToMany(() => Produto, (produto) => produto.categoria)
 produto: Produto[];
}
    
    
