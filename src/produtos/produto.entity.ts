import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProdutoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;

    @Column()
    valor: number;
    
    @Column()
    descricao: string;
}