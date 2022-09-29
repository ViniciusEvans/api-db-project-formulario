import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  sobrenome: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  telefone: string;

  @Column({ type: "text" })
  cidade: string;

  @Column({ type: "text" })
  estado: string;

  @Column({ type: "text" })
  cep: string;

  @Column({ type: "text" })
  estado_civil: string;

  @Column({ type: "text" })
  genero: string;

  @Column({ type: "text" })
  etnia: string;

  @Column({ type: "int" })
  peso: number;

  @Column({ type: "int" })
  altura: number;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
