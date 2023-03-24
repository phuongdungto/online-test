import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTest1679657689109 implements MigrationInterface {
    name = 'updateTest1679657689109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD \`question_url\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\`
            ADD \`answer_url\` varchar(255) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP COLUMN \`answer_url\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`tests\` DROP COLUMN \`question_url\`
        `);
    }

}
