import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTest1679681281166 implements MigrationInterface {
    name = 'updateTest1679681281166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD \`start_date\` datetime NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD \`time\` int NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP COLUMN \`time\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP COLUMN \`start_date\`
        `);
    }

}
