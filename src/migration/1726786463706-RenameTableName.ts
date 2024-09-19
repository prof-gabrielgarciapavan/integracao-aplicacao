import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTableName1726786463706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Renomear a tabela de 'old_table_name' para 'new_table_name'
        await queryRunner.renameColumn("Tabela_Usuario", "primeiro_nome", "primario_nome");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Reverter o nome da tabela de 'new_table_name' para 'old_table_name'
        await queryRunner.renameColumn("Tabela_Usuario", "primario_nome", "primeiro_nome");
    }

}
