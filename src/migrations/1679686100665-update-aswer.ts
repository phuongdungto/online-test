import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAswer1679686100665 implements MigrationInterface {
    name = 'updateAswer1679686100665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP COLUMN \`answer\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD \`answer\` varchar(255) NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`test_details\` DROP COLUMN \`answer\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`test_details\`
            ADD \`answer\` int NULL
        `);
    }

}
