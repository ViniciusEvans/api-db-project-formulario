import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661359168074 implements MigrationInterface {
    name = 'default1661359168074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "sobrenome" text NOT NULL, "email" text NOT NULL, "telefone" text NOT NULL, "cidade" text NOT NULL, "estado" text NOT NULL, "cep" text NOT NULL, "estado_civil" text NOT NULL, "genero" text NOT NULL, "raca" text NOT NULL, "peso" integer NOT NULL, "altura" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
